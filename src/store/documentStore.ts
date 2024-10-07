// src/stores/useDocumentStore.ts
import { create } from "zustand";
import documentService from "../services/documentService";

interface Document {
  id: string;
  name: string;
  status: boolean;
  userId: string;
}

interface DocumentState {
  documents: Document[];
  isLoading: boolean;
  error: string | null;

  fetchAllDocuments: () => Promise<void>;
  createDocument: (data: Omit<Document, "id">) => Promise<void>;
  updateDocument: (id: string, data: Partial<Document>) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  isLoading: false,
  error: null,

  fetchAllDocuments: async () => {
    set({ isLoading: true });
    try {
      const documents = await documentService.getAllDocuments();
      set({ documents, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch documents", isLoading: false });
    }
  },

  createDocument: async (data: Omit<Document, "id">) => {
    set({ isLoading: true });
    try {
      await documentService.createDocument(data);
      await useDocumentStore.getState().fetchAllDocuments(); // Atualiza a lista após criar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to create document", isLoading: false });
    }
  },

  updateDocument: async (id: string, data: Partial<Document>) => {
    set({ isLoading: true });
    try {
      await documentService.updateDocument(id, data);
      await useDocumentStore.getState().fetchAllDocuments(); // Atualiza a lista após atualizar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to update document", isLoading: false });
    }
  },

  deleteDocument: async (id: string) => {
    set({ isLoading: true });
    try {
      await documentService.deleteDocument(id);
      await useDocumentStore.getState().fetchAllDocuments(); // Atualiza a lista após deletar
      set({ isLoading: false });
    } catch (error) {
      set({ error: "Failed to delete document", isLoading: false });
    }
  },
}));
