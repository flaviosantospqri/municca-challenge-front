// src/stores/useAuthStore.ts
import { create } from "zustand";
import authService from "../services/authService";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    console.log("chamou");
    try {
      const { token } = await authService.login({ email, password });
      set({ token, isLoading: false });
    } catch (error) {
      set({ error: "Failed to login", isLoading: false });
    }
  },

  logout: () => {
    set({ token: null });
  },
}));
