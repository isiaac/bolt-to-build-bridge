export type UserRole = 'player' | 'coach' | 'rink_admin' | 'rink_owner';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  avatar?: string;
  teamId?: string;
  rinkId?: string;
  verified: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}