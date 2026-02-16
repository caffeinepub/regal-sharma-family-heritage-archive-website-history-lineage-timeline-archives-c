import { useEffect } from 'react';
import TimelineList from '../components/timeline/TimelineList';

export default function TimelinePage() {
  useEffect(() => {
    document.title = 'Historical Timeline - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chronological timeline of key historical milestones in the Sharma family legacy.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Historical Timeline
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
            Chronological milestones spanning centuries of service, governance, and cultural stewardship
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <TimelineList />
      </div>
    </div>
  );
}
