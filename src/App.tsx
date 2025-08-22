import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useAuthStore } from "@/store/authStore";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import PlayerLayout from "./components/layout/PlayerLayout";
import RinkLayout from "./components/layout/RinkLayout";
import RinkDashboard from "./pages/rink/RinkDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const { user } = useAuthStore();

  const getLayoutByRole = () => {
    if (!user) return null;
    
    switch (user.role) {
      case 'rink_admin':
      case 'rink_owner':
        return RinkLayout;
      case 'player':
      case 'coach':
      default:
        return PlayerLayout;
    }
  };

  const Layout = getLayoutByRole();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            
            {/* Protected Routes */}
            <Route element={
              <AuthGuard>
                {Layout && <Layout />}
              </AuthGuard>
            }>
              {/* Player/Coach Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/teams" element={<div>Teams Page</div>} />
              <Route path="/stats" element={<div>Stats Page</div>} />
              <Route path="/store" element={<div>Store Page</div>} />
              <Route path="/badges" element={<div>Badges Page</div>} />
              <Route path="/chat" element={<div>Chat Page</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
              
              {/* Rink Admin Routes */}
              <Route path="/rink/dashboard" element={<RinkDashboard />} />
              <Route path="/rink/schedule" element={<div>Schedule Page</div>} />
              <Route path="/rink/payments" element={<div>Payments Page</div>} />
              <Route path="/rink/team-import" element={<div>Team Import Page</div>} />
              <Route path="/rink/teams" element={<div>Rink Teams Page</div>} />
              <Route path="/rink/settings" element={<div>Rink Settings Page</div>} />
            </Route>
            
            <Route path="/" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
