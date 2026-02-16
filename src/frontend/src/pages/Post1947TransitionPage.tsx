import { useEffect } from 'react';
import { post1947Content } from '../content/historyContent';
import SourcesCitationsBlock from '../components/common/SourcesCitationsBlock';

export default function Post1947TransitionPage() {
  useEffect(() => {
    document.title = 'Post-1947 Transition - The Sharma Family Heritage Archive';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The transition of the Sharma family following India\'s independence and the abolition of royal privileges in 1947.');
    }
  }, []);

  return (
    <div className="py-12 animate-in fade-in duration-700">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-heritage-burgundy mb-4">
            {post1947Content.title}
          </h1>
          <p className="text-xl text-muted-foreground italic">
            {post1947Content.subtitle}
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img 
            src="/assets/generated/ornamental-divider.dim_2400x300.png" 
            alt=""
            className="h-6 w-auto opacity-20"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          {post1947Content.sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-heritage-burgundy">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.sources && (
                <SourcesCitationsBlock sources={section.sources} />
              )}
            </section>
          ))}
        </div>

        {post1947Content.futureResearchPlaceholder && (
          <div className="mt-12 p-6 bg-muted/30 border border-heritage-gold/20 rounded-lg">
            <h3 className="font-serif text-lg font-semibold text-heritage-burgundy mb-2">
              Future Research & Oral Histories
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {post1947Content.futureResearchPlaceholder}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
