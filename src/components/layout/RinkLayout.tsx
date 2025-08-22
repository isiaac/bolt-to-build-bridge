import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { RinkSidebar } from '@/components/layout/RinkSidebar';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

const RinkLayout = () => {
  const { user, logout } = useAuthStore();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <RinkSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 flex items-center justify-between border-b bg-card px-4">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold text-primary">HockeyHub Admin</h1>
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.firstName}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-background">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default RinkLayout;