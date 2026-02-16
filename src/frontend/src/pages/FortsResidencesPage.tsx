import { useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function FortsResidencesPage() {
  useEffect(() => {
    document.title = 'Forts & Residences - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Akhnoor Fort and Amar Mahal Palace - the military stronghold and official residence of the Sharma family.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            Forts & Residences
          </h1>
          <p className="text-xl text-muted-foreground italic">
            The architectural legacy of the Sharma family
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <div className="space-y-12">
          {/* Akhnoor Fort */}
          <Card className="border-heritage-gold/30">
            <CardHeader>
              <CardTitle className="font-serif text-3xl text-heritage-burgundy">
                Akhnoor Fort
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-6">
                <img 
                  src="/assets/generated/akhnoor-fort-etching.dim_1800x900.png" 
                  alt="Akhnoor Fort - Military Stronghold"
                  className="w-full rounded-lg border border-heritage-gold/20"
                />
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Akhnoor Fort</strong> served as the military stronghold and strategic center of the Sharma family's governance. Located in the Akhnoor district of Jammu & Kashmir, this fortification represented the family's authority and their role in maintaining regional stability.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The fort's strategic position along important trade and military routes made it a crucial asset in the administration of the region. From this stronghold, the Rajas of Akhnoor exercised their autonomy while maintaining their allegiance to the Maharaja of Jammu & Kashmir.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The fort stands as a testament to the military and administrative capabilities of the Sharma family, reflecting their dual role as both warriors and administrators in service to the Dogra rulers.
                </p>
              </div>
              <div className="mt-6 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Additional historical documentation, architectural details, and oral histories regarding Akhnoor Fort are being compiled for future inclusion in this archive.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Amar Mahal Palace */}
          <Card className="border-heritage-gold/30">
            <CardHeader>
              <CardTitle className="font-serif text-3xl text-heritage-burgundy">
                Amar Mahal Palace
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Amar Mahal Palace</strong> functioned as the official residence of the Sharma family, serving as the ceremonial and administrative center of their governance. This palace represented the cultural refinement and administrative sophistication of the family.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  As the seat of civil administration, Amar Mahal Palace was where the family conducted official business, received dignitaries, and maintained the cultural traditions that defined their legacy. The palace reflected the family's commitment to both governance and cultural stewardship.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  The architectural and cultural significance of Amar Mahal Palace continues to be recognized as an important part of the region's heritage, symbolizing the Sharma family's contributions to the cultural landscape of Jammu & Kashmir.
                </p>
              </div>
              <div className="mt-6 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
                <p className="text-sm text-muted-foreground italic">
                  Detailed architectural studies, historical photographs, and family accounts of life at Amar Mahal Palace are being gathered for future additions to this section.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
