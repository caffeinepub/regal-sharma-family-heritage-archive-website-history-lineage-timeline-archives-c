import { useState } from 'react';
import { archiveItems } from '../../content/archive';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import ArchiveItemDetailDialog from './ArchiveItemDetailDialog';
import { Image, FileText, Mail, Gem } from 'lucide-react';

const categoryIcons = {
  Photographs: Image,
  Letters: Mail,
  Documents: FileText,
  Artifacts: Gem,
};

export default function ArchiveBrowser() {
  const [selectedItem, setSelectedItem] = useState<typeof archiveItems[0] | null>(null);

  const categories = ['Photographs', 'Letters', 'Documents', 'Artifacts'] as const;

  return (
    <div className="space-y-6">
      <Tabs defaultValue="Photographs" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-heritage-burgundy data-[state=active]:text-white flex items-center gap-2 py-3"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {categories.map((category) => {
          const items = archiveItems.filter((item) => item.category === category);
          return (
            <TabsContent key={category} value={category} className="mt-6">
              {items.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <Card 
                      key={item.id}
                      className="cursor-pointer transition-all hover:shadow-lg hover:border-heritage-gold/50 hover:-translate-y-1"
                      onClick={() => setSelectedItem(item)}
                    >
                      <CardHeader>
                        <CardTitle className="font-serif text-lg text-heritage-burgundy">
                          {item.title}
                        </CardTitle>
                        {item.date && (
                          <CardDescription>{item.date}</CardDescription>
                        )}
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 px-4 bg-muted/30 border border-heritage-gold/20 rounded-lg">
                  <p className="text-muted-foreground italic">
                    Items in this category are being catalogued and will be added to the archive soon.
                  </p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>

      {selectedItem && (
        <ArchiveItemDetailDialog 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}
