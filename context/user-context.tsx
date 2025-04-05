"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../domain/User";
import { UserService } from "../application/UserService";

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const stored = UserService.get();
    if (stored) setUserState(stored);
  }, []);

  const setUser = (user: User) => {
    UserService.save(user);
    setUserState(user);
  };

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
