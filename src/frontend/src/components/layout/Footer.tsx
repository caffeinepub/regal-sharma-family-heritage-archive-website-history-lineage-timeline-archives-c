import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'sharma-heritage'
  );

  return (
    <footer className="border-t border-heritage-gold/20 bg-heritage-burgundy/5 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="text-center md:text-left">
            <p className="font-serif">
              © {currentYear} The Sharma Family Heritage Archive. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-center">
            <span>Built with</span>
            <Heart className="w-4 h-4 fill-heritage-burgundy text-heritage-burgundy" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-heritage-burgundy hover:text-heritage-gold transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
