import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Profile {
  name: string;
  title: string;
  role: string;
  description: string;
}

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="border-heritage-gold/30">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="font-serif text-2xl text-heritage-burgundy mb-2">
              {profile.name}
            </CardTitle>
            <p className="text-sm font-medium text-heritage-gold mb-1">{profile.title}</p>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 leading-relaxed">
          {profile.description}
        </p>
      </CardContent>
    </Card>
  );
}
