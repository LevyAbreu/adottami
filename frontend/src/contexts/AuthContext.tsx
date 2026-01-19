import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
}

interface AuthContextType {
  user: User;
  updateUser: (newData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "User",
    handle: "User.example",
    avatar: "https://img.icons8.com/?size=100&id=15265&format=png&color=FFFFFF",
    bio: "Adicionar Bio"
  });

  const updateUser = (newData: Partial<User>) => {
    setUser(prev => ({ ...prev, ...newData }));
  };

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};