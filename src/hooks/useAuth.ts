import { createContext, useState, useContext, useEffect } from "react";
import {
  loginUser as loginApiService,
  getAuthenticatedUser,
} from "../services/authService";
import type { LoginCredentials } from "../interfaces/auth.interface";
import type { User } from "../interfaces/user.interface";

// Definimos la forma del contexto
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

// Creamos y exportamos el contexto para que el Provider lo use
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Hook con la lógica de estado
export const useAuthLogic = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (localStorage.getItem("authToken")) {
        try {
          const userData = await getAuthenticatedUser();
          setUser(userData);
        } catch {
          localStorage.removeItem("authToken");
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    const data = await loginApiService(credentials);
    localStorage.setItem("authToken", data.access_token);
    const userData = await getAuthenticatedUser();
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return { user, isAuthenticated: !!user, login, logout, loading };
};

// Hook para consumir el contexto en los componentes
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
