"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("snt-user");
      if (saved) setUser(JSON.parse(saved));
    } catch {
      // no saved user — start logged out
    }
  }, []);

  // Dummy auth for the MVP: any email / password works, no backend.
  const login = (email, password) => {
    const name = email.split("@")[0].replace(/[._-]/g, " ");
    const u = { name: name.charAt(0).toUpperCase() + name.slice(1), email };
    setUser(u);
    try { localStorage.setItem("snt-user", JSON.stringify(u)); } catch {}
    return u;
  };

  const register = (name, email, password) => {
    const u = { name, email };
    setUser(u);
    try { localStorage.setItem("snt-user", JSON.stringify(u)); } catch {}
    return u;
  };

  const logout = () => {
    setUser(null);
    try { localStorage.removeItem("snt-user"); } catch {}
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
