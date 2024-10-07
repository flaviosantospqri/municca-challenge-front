// src/stores/useUserStore.ts
import { create } from "zustand";
import userService from "../services/userService";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserState {
  users: User[];
  user: User | null;
  isLoading: boolean;
  error: string | null;

  fetchAllUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  createUser: (data: Omit<User, "id">) => Promise<void>;
  updateUser: (id: string, data: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  user: null,
  isLoading: false,
  error: null,

  fetchAllUsers: async () => {
    set({ isLoading: true });
    try {
      const users = await userService.getAllUsers();
      set({ users, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch users", isLoading: false });
    }
  },

  fetchUserById: async (id: string) => {
    set({ isLoading: true });
    try {
      const user = await userService.getUserById(id);
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch user", isLoading: false });
    }
  },

  createUser: async (data: Omit<User, "id">) => {
    set({ isLoading: true });
    try {
      await userService.createUser(data);
      await useUserStore.getState().fetchAllUsers(); // Atualiza a lista após criar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to create user", isLoading: false });
    }
  },

  updateUser: async (id: string, data: Partial<User>) => {
    set({ isLoading: true });
    try {
      await userService.updateUser(id, data);
      await useUserStore.getState().fetchAllUsers(); // Atualiza a lista após atualizar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to update user", isLoading: false });
    }
  },

  deleteUser: async (id: string) => {
    set({ isLoading: true });
    try {
      await userService.deleteUser(id);
      await useUserStore.getState().fetchAllUsers(); // Atualiza a lista após deletar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to delete user", isLoading: false });
    }
  },
}));
