import { useEffect } from 'react';
import ProfileCard from '../components/current-generation/ProfileCard';
import { currentGenerationProfiles } from '../content/currentGeneration';

export default function CurrentGenerationPage() {
  useEffect(() => {
    document.title = 'Current Generation - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The current generation of the Sharma family: Rawal Tilak Raj Singh Sharma, Kunwar Rajkumar Singh Sharma, and Bhanwar Aarav Singh Sharma.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Current Generation
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
            Continuing the traditions and preserving the heritage of the Sharma family
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <div className="space-y-8 mb-12">
          {currentGenerationProfiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>

        {/* Continuity of Traditions */}
        <div className="mt-16 p-8 bg-heritage-burgundy/5 border border-heritage-gold/30 rounded-lg">
          <h2 className="font-serif text-2xl font-bold text-heritage-burgundy mb-4">
            Continuity of Traditions
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed">
              Despite the abolition of formal royal privileges in 1947, the Sharma family continues to honor and preserve the traditions, values, and cultural heritage passed down through ten generations. The family maintains its commitment to public service, cultural stewardship, and the preservation of historical memory.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Through this digital archive and ongoing efforts to document family history, the current generation ensures that the legacy of service, loyalty, and governance that began with Lakshmandev Singh Sharma remains accessible to future generations and scholars of regional history.
            </p>
          </div>
          <div className="mt-6 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              Detailed accounts of contemporary family activities, cultural initiatives, and preservation efforts are being compiled for future inclusion in this section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
