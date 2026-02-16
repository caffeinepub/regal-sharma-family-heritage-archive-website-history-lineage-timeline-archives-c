import { useState } from 'react';
import { useSubmitContribution } from '../../hooks/useSubmitContribution';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface ContributionsFormProps {
  onSuccess: () => void;
}

export default function ContributionsForm({ onSuccess }: ContributionsFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    relationshipOrAffiliation: '',
    message: '',
    attachmentMetadata: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: submitContribution, isPending } = useSubmitContribution();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must provide consent to submit';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const submissionId = `submission-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    submitContribution(
      {
        submissionId,
        submission: {
          name: formData.name,
          email: formData.email,
          relationshipOrAffiliation: formData.relationshipOrAffiliation,
          message: formData.message,
          attachmentMetadata: formData.attachmentMetadata || undefined,
          consent: formData.consent,
        },
      },
      {
        onSuccess: () => {
          onSuccess();
        },
        onError: (error) => {
          setErrors({ submit: error.message || 'Failed to submit. Please try again.' });
        },
      }
    );
  };

  return (
    <Card className="border-heritage-gold/30">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? 'border-destructive' : ''}
              disabled={isPending}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? 'border-destructive' : ''}
              disabled={isPending}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="relationship" className="text-sm font-medium">
              Relationship or Affiliation
            </Label>
            <Input
              id="relationship"
              value={formData.relationshipOrAffiliation}
              onChange={(e) => setFormData({ ...formData, relationshipOrAffiliation: e.target.value })}
              placeholder="e.g., Family member, Researcher, Historian"
              disabled={isPending}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className={errors.message ? 'border-destructive' : ''}
              placeholder="Share your contribution, research, or inquiry..."
              disabled={isPending}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="attachment" className="text-sm font-medium">
              Attachment Information (Optional)
            </Label>
            <Textarea
              id="attachment"
              value={formData.attachmentMetadata}
              onChange={(e) => setFormData({ ...formData, attachmentMetadata: e.target.value })}
              rows={3}
              placeholder="Describe any documents, photographs, or materials you wish to share (file upload functionality coming soon)"
              disabled={isPending}
            />
          </div>

          <div className="flex items-start gap-3 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
              disabled={isPending}
              className={errors.consent ? 'border-destructive' : ''}
            />
            <div className="flex-1">
              <Label htmlFor="consent" className="text-sm font-medium cursor-pointer">
                I consent to the submission of this information to the Sharma Family Heritage Archive <span className="text-destructive">*</span>
              </Label>
              {errors.consent && (
                <p className="text-sm text-destructive mt-1">{errors.consent}</p>
              )}
            </div>
          </div>

          {errors.submit && (
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-sm text-destructive">{errors.submit}</p>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full bg-heritage-burgundy hover:bg-heritage-burgundy/90"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Contribution'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
