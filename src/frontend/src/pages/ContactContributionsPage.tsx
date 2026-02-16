import { useEffect, useState } from 'react';
import ContributionsForm from '../components/contributions/ContributionsForm';
import SubmissionSuccessPanel from '../components/contributions/SubmissionSuccessPanel';

export default function ContactContributionsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Contributions - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Submit family contributions, research, or inquiries to the Sharma Family Heritage Archive.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Contact & Family Contributions
          </h1>
          <p className="text-xl text-muted-foreground italic">
            Share your knowledge, memories, or research with the archive
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                The Sharma Family Heritage Archive welcomes contributions from family members, researchers, and historians. If you possess documents, photographs, oral histories, or scholarly research related to the Sharma family legacy, we invite you to share them with us.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Your contributions help preserve and expand our understanding of this important chapter in the history of Jammu & Kashmir.
              </p>
            </div>

            <ContributionsForm onSuccess={() => setIsSubmitted(true)} />
          </div>
        ) : (
          <SubmissionSuccessPanel onReset={() => setIsSubmitted(false)} />
        )}
      </div>
    </div>
  );
}
