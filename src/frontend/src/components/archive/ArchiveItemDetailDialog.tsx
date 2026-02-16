import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import SourcesCitationsBlock from '../common/SourcesCitationsBlock';

interface ArchiveItem {
  id: string;
  category: string;
  title: string;
  date?: string;
  description: string;
  source?: string;
  notes?: string;
}

interface ArchiveItemDetailDialogProps {
  item: ArchiveItem;
  onClose: () => void;
}

export default function ArchiveItemDetailDialog({ item, onClose }: ArchiveItemDetailDialogProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-heritage-burgundy">
            {item.title}
          </DialogTitle>
          {item.date && (
            <DialogDescription className="text-base">
              {item.date}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-6 pt-4">
          <div>
            <h3 className="font-semibold text-sm text-heritage-burgundy mb-2">Description</h3>
            <p className="text-foreground/80 leading-relaxed">
              {item.description}
            </p>
          </div>

          {item.notes && (
            <div>
              <h3 className="font-semibold text-sm text-heritage-burgundy mb-2">Notes</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.notes}
              </p>
            </div>
          )}

          {item.source && (
            <SourcesCitationsBlock sources={[item.source]} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
