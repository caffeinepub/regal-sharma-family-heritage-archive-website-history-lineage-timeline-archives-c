import { useState } from 'react';
import { lineageData } from '../../content/lineage';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import PersonDetailsPanel from './PersonDetailsPanel';
import { ChevronRight } from 'lucide-react';

export default function FamilyTree() {
  const [selectedPerson, setSelectedPerson] = useState<typeof lineageData[0] | null>(null);

  return (
    <div className="space-y-6">
      {/* Desktop View - Hierarchical */}
      <div className="hidden md:block">
        <div className="space-y-4">
          {lineageData.map((person, index) => (
            <div key={person.id} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-heritage-burgundy text-white flex items-center justify-center font-serif font-bold">
                  {index + 1}
                </div>
                {index < lineageData.length - 1 && (
                  <div className="w-0.5 h-16 bg-heritage-gold/30 my-2" />
                )}
              </div>
              <Card 
                className="flex-1 cursor-pointer transition-all hover:shadow-lg hover:border-heritage-gold/50"
                onClick={() => setSelectedPerson(person)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-heritage-burgundy mb-1">
                        {person.name}
                      </h3>
                      {person.period && (
                        <p className="text-sm text-muted-foreground mb-2">{person.period}</p>
                      )}
                      {person.title && (
                        <p className="text-sm font-medium text-heritage-gold">{person.title}</p>
                      )}
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - Accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="space-y-2">
          {lineageData.map((person, index) => (
            <AccordionItem key={person.id} value={person.id} className="border border-heritage-gold/20 rounded-lg">
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 rounded-full bg-heritage-burgundy text-white flex items-center justify-center font-serif font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-heritage-burgundy">
                      {person.name}
                    </h3>
                    {person.period && (
                      <p className="text-xs text-muted-foreground">{person.period}</p>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-3 pt-2">
                  {person.title && (
                    <p className="text-sm font-medium text-heritage-gold">{person.title}</p>
                  )}
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {person.biography}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Person Details Dialog */}
      {selectedPerson && (
        <PersonDetailsPanel 
          person={selectedPerson} 
          onClose={() => setSelectedPerson(null)} 
        />
      )}
    </div>
  );
}
