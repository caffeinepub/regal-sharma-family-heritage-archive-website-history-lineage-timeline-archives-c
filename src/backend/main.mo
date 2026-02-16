import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Submission Management
  public type Submission = {
    name : Text;
    email : Text;
    relationshipOrAffiliation : Text;
    message : Text;
    attachmentMetadata : ?Text;
    consent : Bool;
  };

  let submissions = Map.empty<Text, Submission>();

  module Submission {
    public func compare(lhs : Submission, rhs : Submission) : Order.Order {
      Text.compare(lhs.email, rhs.email);
    };
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    submissions.values().toArray().sort();
  };

  public shared ({ caller }) func submitForm(
    submissionId : Text,
    submission : Submission,
  ) : async () {
    // Public submission - no authentication required (guests can submit)
    // This allows relatives and researchers to submit without accounts
    
    // Validate consent
    if (not submission.consent) {
      Runtime.trap("Consent is required to submit the form");
    };
    
    // Validate required fields
    if (submission.name == "" or submission.email == "" or submission.message == "") {
      Runtime.trap("Name, email, and message are required fields");
    };
    
    submissions.add(submissionId, submission);
  };
};
