import axios from "axios";
interface Credentials {
  email: string;
  password: string;
}
const login = async ({ email, password }: Credentials) => {
  const response = await axios.post("http://localhost:3000/user/login", {
    email,
    password,
  });
  return response;
};

export default login;
