import { timelineData } from '../../content/timeline';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar } from 'lucide-react';
import SourcesCitationsBlock from '../common/SourcesCitationsBlock';

export default function TimelineList() {
  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="space-y-4">
        {timelineData.map((entry) => (
          <AccordionItem 
            key={entry.id} 
            value={entry.id}
            className="border border-heritage-gold/20 rounded-lg overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-heritage-gold/5">
              <div className="flex items-start gap-4 text-left w-full">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="w-5 h-5 text-heritage-burgundy" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-heritage-burgundy mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{entry.period}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4 pt-2 pl-9">
                <p className="text-foreground/80 leading-relaxed">
                  {entry.description}
                </p>
                {entry.sources && entry.sources.length > 0 && (
                  <SourcesCitationsBlock sources={entry.sources} />
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
