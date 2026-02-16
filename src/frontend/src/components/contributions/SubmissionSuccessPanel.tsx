import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface SubmissionSuccessPanelProps {
  onReset: () => void;
}

export default function SubmissionSuccessPanel({ onReset }: SubmissionSuccessPanelProps) {
  return (
    <Card className="border-heritage-gold/30">
      <CardHeader>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
          <CardTitle className="font-serif text-2xl text-heritage-burgundy">
            Submission Received
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-foreground/80 leading-relaxed">
          Thank you for your contribution to the Sharma Family Heritage Archive. Your submission has been received and will be reviewed by the archive administrators.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          We appreciate your efforts in helping preserve and expand our understanding of this important historical legacy. If we require additional information or clarification, we will contact you at the email address you provided.
        </p>
        <div className="pt-4">
          <Button 
            variant="outline" 
            onClick={onReset}
            className="border-heritage-gold text-heritage-burgundy hover:bg-heritage-gold/10"
          >
            Submit Another Contribution
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
