import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}

const authService = {
  login: async (data: LoginData) => {
    console.log("data");
    const response = await axios.post("http://localhost:3000/login", { data });
    console.log(response);
    return response.data;
  },
};

export default authService;
