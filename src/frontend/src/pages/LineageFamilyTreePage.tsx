import { useEffect } from 'react';
import FamilyTree from '../components/lineage/FamilyTree';

export default function LineageFamilyTreePage() {
  useEffect(() => {
    document.title = 'Lineage & Family Tree - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The direct lineage of the Sharma family spanning ten generations from Lakshmandev Singh Sharma to Aarav Sharma.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Lineage & Family Tree
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
            Ten generations of the Sharma family, from the founding service of Lakshmandev Singh Sharma to the present continuation under Aarav Sharma
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <div className="mb-8 p-6 bg-heritage-gold/5 border border-heritage-gold/30 rounded-lg">
          <p className="text-center text-foreground/80">
            <strong className="text-heritage-burgundy">Note:</strong> Bhanwar Aarav Singh Sharma represents the present generation carrying forward the legacy of the Sharma family.
          </p>
        </div>

        <FamilyTree />
      </div>
    </div>
  );
}
