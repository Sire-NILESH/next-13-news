"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth, googleProvider } from "@/firebase";
import { customiseClientError } from "@/lib/clientErrorHandler";
import { CustomError } from "@/types";

interface IAuth {
  user: User | null;
  register: (
    email: string,
    userName: string,
    password: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  error: null | CustomError;
  clearError: () => void;
  loading: boolean;
}

const AuthContext = createContext<IAuth>({
  user: null,
  register: async () => {},
  login: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
  error: null,
  clearError: () => {},
  loading: false,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<null | CustomError>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          // setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          // setLoading(true);
          // router.push("/login");
          // router.push("/");
        }

        if (initialLoading) {
          setInitialLoading(false);
        }
      }),
    [auth]
  );

  const register = async (
    email: string,
    userName: string,
    password: string
  ) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: userName,
        photoURL: null,
      });

      router.push("/");
    } catch (error: any) {
      const customisedError = customiseClientError(error, email);
      setError(customisedError);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // setUser(userCredential.user);
      router.push("/");
    } catch (error: any) {
      const customisedError = customiseClientError(error, email);
      setError(customisedError);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);

    try {
      await signOut(auth);
      // setUser(null);
      // router.replace("/");
    } catch (error: any) {
      const customisedError = customiseClientError(error);
      setError(customisedError);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);

    await signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);
        router.push("/");
      })
      .catch((error) => {
        const customisedError = customiseClientError(error);
        setError(customisedError);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const clearError = () => {
    setError(null);
  };

  const memoedValue = useMemo(
    () => ({
      user,
      register,
      login,
      loginWithGoogle,
      error,
      clearError,
      loading,
      logout,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context comopnent.
export default function useAuth() {
  return useContext(AuthContext);
}
