import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  Users, 
  Calendar, 
  TrendingUp, 
  Clock,
  MapPin 
} from 'lucide-react';

const RinkDashboard = () => {
  const todayStats = {
    revenue: 2850,
    bookings: 12,
    utilization: 78,
    activeTeams: 8,
  };

  const liveGames = [
    {
      id: 1,
      teams: 'Ice Hawks vs Thunder',
      rink: 'Main Rink',
      period: '2nd Period',
      time: '12:45',
      score: '2-1',
    },
    {
      id: 2,
      teams: 'Lightning vs Sharks',
      rink: 'Rink 2',
      period: '1st Period',
      time: '8:30',
      score: '0-0',
    },
  ];

  const upcomingBookings = [
    { time: '8:00 PM', rink: 'Main Rink', type: 'League Game', team: 'Flames vs Kings' },
    { time: '9:30 PM', rink: 'Rink 2', type: 'Practice', team: 'Lightning Team' },
    { time: '10:00 PM', rink: 'Main Rink', type: 'Open Skate', team: 'Public' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Rink Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive facility overview and management
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${todayStats.revenue}</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.bookings}</div>
            <p className="text-xs text-muted-foreground">
              3 more than yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ice Utilization</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.utilization}%</div>
            <Progress value={todayStats.utilization} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Teams</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todayStats.activeTeams}</div>
            <p className="text-xs text-muted-foreground">
              2 new this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Live Games Monitor */}
        <Card>
          <CardHeader>
            <CardTitle>Live Games</CardTitle>
            <CardDescription>Real-time game monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {liveGames.map((game) => (
              <div key={game.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{game.teams}</div>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {game.rink}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center">
                    <Badge variant="destructive" className="mr-2">LIVE</Badge>
                    <span className="font-bold">{game.score}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {game.period} - {game.time}
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              View All Games
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Upcoming ice time bookings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingBookings.map((booking, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{booking.team}</div>
                  <div className="text-sm text-muted-foreground">
                    {booking.type}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {booking.time}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {booking.rink}
                  </div>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              Manage Schedule
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-20 flex flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              Add Booking
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <Users className="h-6 w-6 mb-2" />
              Manage Teams
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <DollarSign className="h-6 w-6 mb-2" />
              Process Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RinkDashboard;