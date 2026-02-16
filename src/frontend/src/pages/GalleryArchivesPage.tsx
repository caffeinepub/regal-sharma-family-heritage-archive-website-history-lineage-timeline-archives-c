import { useEffect } from 'react';
import ArchiveBrowser from '../components/archive/ArchiveBrowser';

export default function GalleryArchivesPage() {
  useEffect(() => {
    document.title = 'Gallery & Archives - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse photographs, letters, documents, and artifacts from the Sharma family collection.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Gallery & Archives
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-3xl mx-auto">
            A curated collection of photographs, letters, documents, and artifacts preserving the material heritage of the Sharma family
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <ArchiveBrowser />
      </div>
    </div>
  );
}
