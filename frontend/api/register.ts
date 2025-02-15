import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const register = async ({ firstName, lastName, email, password }: FormData) => {
  const response = await axios.post("http://localhost:3000/user/register", {
    firstName,
    lastName,
    email,
    password,
  });

  return response;
};

export default register;
