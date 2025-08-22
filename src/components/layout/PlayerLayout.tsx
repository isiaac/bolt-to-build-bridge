import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';
import { 
  Home, 
  Users, 
  BarChart3, 
  ShoppingBag, 
  Award, 
  MessageCircle, 
  User,
  LogOut
} from 'lucide-react';

const PlayerLayout = () => {
  const location = useLocation();
  const { user, logout } = useAuthStore();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Games' },
    { path: '/teams', icon: Users, label: 'Teams' },
    { path: '/stats', icon: BarChart3, label: 'Stats' },
    { path: '/store', icon: ShoppingBag, label: 'Store' },
    { path: '/badges', icon: Award, label: 'Badges' },
    { path: '/chat', icon: MessageCircle, label: 'Chat' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-primary">HockeyHub</h1>
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.firstName}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-t bg-card">
        <div className="flex justify-around py-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <NavLink
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 px-3 text-xs transition-colors ${
                isActive(path)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default PlayerLayout;