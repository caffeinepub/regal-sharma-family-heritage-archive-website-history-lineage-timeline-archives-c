import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/founding-era', label: 'Founding Era' },
  { path: '/akhnoor-sovereignty', label: 'Akhnoor Sovereignty' },
  { path: '/forts-residences', label: 'Forts & Residences' },
  { path: '/lineage-family-tree', label: 'Lineage' },
  { path: '/royal-administration-legacy', label: 'Royal Administration' },
  { path: '/post-1947-transition', label: 'Post-1947' },
  { path: '/current-generation', label: 'Current Generation' },
  { path: '/gallery-archives', label: 'Gallery & Archives' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/contact-contributions', label: 'Contact' },
];

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-heritage-gold/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/assets/generated/sharma-crest-emblem.dim_512x512.png" 
              alt="Sharma Family Crest"
              className="h-12 w-12 transition-transform group-hover:scale-105"
            />
            <div className="hidden md:block">
              <h1 className="font-serif text-xl font-bold text-heritage-burgundy leading-tight">
                The Sharma Family
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Heritage Archive
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  currentPath === link.path
                    ? 'text-heritage-burgundy bg-heritage-gold/10'
                    : 'text-foreground/80 hover:text-heritage-burgundy hover:bg-heritage-gold/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="font-serif text-heritage-burgundy mb-6">
                Navigation
              </SheetTitle>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                      currentPath === link.path
                        ? 'text-heritage-burgundy bg-heritage-gold/10'
                        : 'text-foreground/80 hover:text-heritage-burgundy hover:bg-heritage-gold/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
