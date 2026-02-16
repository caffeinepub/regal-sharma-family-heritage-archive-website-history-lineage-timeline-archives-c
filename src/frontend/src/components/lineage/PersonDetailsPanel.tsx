import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Person {
  id: string;
  name: string;
  period?: string;
  title?: string;
  biography: string;
}

interface PersonDetailsPanelProps {
  person: Person;
  onClose: () => void;
}

export default function PersonDetailsPanel({ person, onClose }: PersonDetailsPanelProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-heritage-burgundy">
            {person.name}
          </DialogTitle>
          {person.period && (
            <DialogDescription className="text-base">
              {person.period}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-4 pt-4">
          {person.title && (
            <div className="p-3 bg-heritage-gold/10 border border-heritage-gold/30 rounded-md">
              <p className="font-medium text-heritage-burgundy">{person.title}</p>
            </div>
          )}
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed">
              {person.biography}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
