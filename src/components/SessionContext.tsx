import React, { createContext, useState } from 'react';
import { SessionData } from '../interfaces';

export const SessionContext = createContext<SessionData>({
  isLoggedIn: false,
});


interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [sessionData, setSessionData] = useState<SessionData>({
    isLoggedIn: false,
  });

  const login = (userId: string, username: string) => {
    setSessionData({
      isLoggedIn: true,
      userId,
      username,
    });
  };

  const logout = () => {
    setSessionData({
      isLoggedIn: false,
    });
  };

  const contextValue: SessionData & { login: (userId: string, username: string) => void; logout: () => void; } = {
    ...sessionData,
    login,
    logout,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
