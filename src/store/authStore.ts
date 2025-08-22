import { create } from 'zustand';
import { AuthState, User } from '@/types/user';

interface AuthActions {
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  mockLogin: (role: string) => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setLoading: (isLoading) => set({ isLoading }),

  login: async (email, password) => {
    set({ isLoading: true });
    
    // Mock authentication for demo
    setTimeout(() => {
      const mockUser: User = {
        id: '1',
        email,
        role: 'player',
        firstName: 'John',
        lastName: 'Doe',
        verified: true,
        createdAt: new Date().toISOString(),
      };
      
      set({ 
        user: mockUser, 
        isAuthenticated: true, 
        isLoading: false 
      });
    }, 1000);
  },

  logout: () => {
    set({ 
      user: null, 
      isAuthenticated: false, 
      isLoading: false 
    });
  },

  mockLogin: (role) => {
    const mockUser: User = {
      id: '1',
      email: 'demo@hockeyhub.com',
      role: role as any,
      firstName: 'Demo',
      lastName: 'User',
      verified: true,
      createdAt: new Date().toISOString(),
    };
    
    set({ 
      user: mockUser, 
      isAuthenticated: true, 
      isLoading: false 
    });
  },
}));