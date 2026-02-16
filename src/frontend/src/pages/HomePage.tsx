import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Crown, Castle, Users, Clock, Archive } from 'lucide-react';

export default function HomePage() {
  useEffect(() => {
    document.title = 'The Sharma Family Heritage Archive - Akhnoor Royal Legacy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Digital archive preserving the heritage, lineage, and legacy of the Sharma family, erstwhile rulers of Akhnoor district in Jammu & Kashmir.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Digital archive preserving the heritage, lineage, and legacy of the Sharma family, erstwhile rulers of Akhnoor district in Jammu & Kashmir.';
      document.head.appendChild(meta);
    }
  }, []);

  const highlights = [
    {
      icon: Crown,
      title: 'Founding Era',
      description: 'The legacy of Lakshmandev Singh Sharma and his service to Maharaja Gulab Singh',
      link: '/founding-era',
    },
    {
      icon: Castle,
      title: 'Akhnoor Sovereignty',
      description: 'The grant of autonomy and establishment of the Rajas of Akhnoor',
      link: '/akhnoor-sovereignty',
    },
    {
      icon: Users,
      title: 'Royal Lineage',
      description: 'Ten generations of the Sharma family from Lakshmandev to Aarav',
      link: '/lineage-family-tree',
    },
    {
      icon: Clock,
      title: 'Historical Timeline',
      description: 'Chronological milestones spanning centuries of service and governance',
      link: '/timeline',
    },
    {
      icon: BookOpen,
      title: 'Royal Administration',
      description: 'Political contributions and cultural legacy under the Dogra rulers',
      link: '/royal-administration-legacy',
    },
    {
      icon: Archive,
      title: 'Gallery & Archives',
      description: 'Photographs, documents, letters, and artifacts from the family collection',
      link: '/gallery-archives',
    },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <img 
                  src="/assets/generated/archival-seal.dim_512x512.png" 
                  alt="Heritage Archive Seal"
                  className="h-16 w-16 opacity-80"
                />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-burgundy leading-tight">
                The Sharma Family Heritage Archive
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
                Preserving the Legacy of the Rajas of Akhnoor
              </p>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed">
                  A digital chronicle documenting the heritage, lineage, and legacy of the Sharma family—the erstwhile rulers of the Akhnoor district in Jammu & Kashmir. From the founding service of Lakshmandev Singh Sharma to Maharaja Gulab Singh, through generations of governance and cultural stewardship, to the present continuation of traditions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-heritage-burgundy hover:bg-heritage-burgundy/90">
                  <Link to="/lineage-family-tree">
                    Explore the Lineage
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-heritage-gold text-heritage-burgundy hover:bg-heritage-gold/10">
                  <Link to="/timeline">
                    View Timeline
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/akhnoor-fort-etching.dim_1800x900.png" 
                alt="Akhnoor Fort - Historical Stronghold of the Sharma Family"
                className="w-full rounded-lg shadow-2xl border border-heritage-gold/20"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
        
        {/* Ornamental Divider */}
        <div className="mt-16 flex justify-center">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-8 w-auto opacity-30"
          />
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-heritage-burgundy/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-heritage-burgundy mb-4">
              Explore the Archive
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navigate through centuries of history, governance, and cultural heritage preserved for future generations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Link key={index} to={highlight.link} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-heritage-gold/50 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">
                      <highlight.icon className="h-10 w-10 text-heritage-burgundy group-hover:text-heritage-gold transition-colors" />
                    </div>
                    <CardTitle className="font-serif text-xl text-heritage-burgundy group-hover:text-heritage-gold transition-colors">
                      {highlight.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {highlight.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-heritage-burgundy mb-8 text-center">
              Historical Background
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-foreground/80 leading-relaxed">
                The Sharma family's distinguished history begins with <strong>Lakshmandev Singh Sharma</strong>, who served as a trusted Munshi and advisor to Maharaja Gulab Singh during the consolidation of rule in Kashmir. In recognition of his unwavering loyalty and service, he was granted the Diwani of Jammu & Kashmir—equivalent to the Prime Ministership.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                His descendants continued in positions of influence and service. During the rebellion faced by Maharaja Ranveer Singh, the Sharma family's steadfast support helped maintain stability in the region. As a reward for their loyalty, the family was granted autonomy over the Akhnoor district, becoming the Rajas of Akhnoor while serving under the Maharaja of Jammu & Kashmir.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                <strong>Akhnoor Fort</strong> served as the family's military stronghold, while <strong>Amar Mahal Palace</strong> functioned as the official residence. After the accession to India in 1947, formal royal privileges and titles were abolished, though the family continues to preserve its traditional heritage and identity through the present generation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
