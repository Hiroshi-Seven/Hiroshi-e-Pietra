import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);
const STORAGE_KEY = "@umawiki/session";

const DEMO_USER = {
  email: "treinador@umawiki.app",
  password: "123456",
  name: "Treinador Demo"
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch (error) {
      console.warn("Não foi possível restaurar a sessão.", error);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return { ok: false, message: "Preencha e-mail e senha." };
    }

    if (normalizedEmail !== DEMO_USER.email || password !== DEMO_USER.password) {
      return {
        ok: false,
        message: "Credenciais inválidas. Use o acesso de demonstração."
      };
    }

    const session = {
      name: DEMO_USER.name,
      email: DEMO_USER.email
    };

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  }

  async function logout() {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  const value = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
      demoCredentials: {
        email: DEMO_USER.email,
        password: DEMO_USER.password
      }
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth precisa ser usado dentro de AuthProvider.");
  }
  return context;
}
