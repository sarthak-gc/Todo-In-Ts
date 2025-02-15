import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../api/login";
import Label from "../Components/Label";
import Input from "../Components/Input";
import FormHeading from "../Components/FormHeading";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(credentials);

    if (response.data.code) {
      alert(response.data.msg);

      localStorage.setItem("token", response.data.code);
      navigate("/todo");
    } else {
      {
        alert(response.data);
      }
    }
  };
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <form
        className="bg-black p-8 rounded-lg w-1/4 shadow-lg border border-gray-700"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormHeading title={"Login"} />

        <div className="mb-4">
          <Label forHtml={"email"} label="Email" />
          <Input label={"email"} handleChange={handleChange} />
        </div>

        <div className="mb-6">
          <Label forHtml={"password"} label="Password" />
          <Input label={"password"} handleChange={handleChange} />
        </div>

        <div className=" items-center justify-center text-center">
          <button className="px-6 py-3 text-white bg-black border-2 w-full border-gray-700 cursor-pointer  hover:text-gray-300 rounded-lg shadow-md  text-2xl hover:border-gray-500">
            Login
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[#FFEB3B] hover:text-[#FFDA2A]"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
