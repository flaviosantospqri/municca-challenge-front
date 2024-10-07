import api from "./api";

interface User {
  id: string;
  name: string;
  email: string;
}

const userService = {
  createUser: async (data: Omit<User, "id">) => {
    const response = await api.post<User>("/user", data);
    return response.data;
  },

  getUserById: async (id: string) => {
    const response = await api.get<User>(`/user/${id}`);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await api.get<User[]>("/users");
    return response.data;
  },

  updateUser: async (id: string, data: Partial<User>) => {
    const response = await api.patch<User>(`/user/${id}`, data);
    return response.data;
  },

  deleteUser: async (id: string) => {
    const response = await api.delete(`/user/${id}`);
    return response.data;
  },
};

export default userService;
