import { BookOpen } from 'lucide-react';

interface SourcesCitationsBlockProps {
  sources?: string[];
}

export default function SourcesCitationsBlock({ sources }: SourcesCitationsBlockProps) {
  if (!sources || sources.length === 0) {
    return (
      <div className="mt-6 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
        <div className="flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-sm text-heritage-burgundy mb-1">
              Sources & Citations
            </h3>
            <p className="text-sm text-muted-foreground italic">
              Citations and source documentation for this entry are being compiled for future inclusion.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
      <div className="flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-heritage-burgundy flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-heritage-burgundy mb-2">
            Sources & Citations
          </h3>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <li key={index} className="text-sm text-foreground/80 leading-relaxed">
                {source.startsWith('http') ? (
                  <a 
                    href={source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-heritage-burgundy hover:text-heritage-gold underline"
                  >
                    {source}
                  </a>
                ) : (
                  source
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
