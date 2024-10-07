import api from "./api";

interface Document {
  id: string;
  name: string;
  status: boolean;
  userId: string;
}

const documentService = {
  createDocument: async (data: Omit<Document, "id">) => {
    const response = await api.post<Document>("/document", data);
    return response.data;
  },

  getAllDocuments: async () => {
    const response = await api.get<Document[]>("/documents");
    return response.data;
  },

  updateDocument: async (id: string, data: Partial<Document>) => {
    const response = await api.patch<Document>(`/document/${id}`, data);
    return response.data;
  },

  deleteDocument: async (id: string) => {
    const response = await api.delete(`/document/${id}`);
    return response.data;
  },
};

export default documentService;
