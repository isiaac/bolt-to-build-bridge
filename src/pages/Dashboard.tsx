import { useAuthStore } from '@/store/authStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuthStore();

  const upcomingGames = [
    {
      id: 1,
      team: 'Ice Hawks vs Thunder',
      date: '2024-08-25',
      time: '7:00 PM',
      rink: 'Main Rink',
      status: 'upcoming',
    },
    {
      id: 2,
      team: 'Lightning vs Sharks',
      date: '2024-08-27',
      time: '8:30 PM',
      rink: 'Rink 2',
      status: 'upcoming',
    },
  ];

  const liveGames = [
    {
      id: 3,
      team: 'Flames vs Kings',
      period: '2nd Period',
      time: '12:45',
      score: '2-1',
      rink: 'Main Rink',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Games Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.firstName}! Here's your hockey activity.
        </p>
      </div>

      {/* Live Games */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Live Games</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {liveGames.map((game) => (
            <Card key={game.id} className="border-destructive">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{game.team}</CardTitle>
                  <Badge variant="destructive">LIVE</Badge>
                </div>
                <CardDescription className="text-lg font-semibold">
                  {game.score}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {game.period} - {game.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {game.rink}
                  </div>
                </div>
                <Button className="w-full mt-4" size="sm">
                  View Live Score
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Games */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Games</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingGames.map((game) => (
            <Card key={game.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{game.team}</CardTitle>
                  <Badge variant="secondary">Upcoming</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(game.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {game.time}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {game.rink}
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1">
                    Check In
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Games Played</CardDescription>
              <CardTitle className="text-2xl">24</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Wins</CardDescription>
              <CardTitle className="text-2xl">18</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Goals</CardDescription>
              <CardTitle className="text-2xl">12</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Assists</CardDescription>
              <CardTitle className="text-2xl">8</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;