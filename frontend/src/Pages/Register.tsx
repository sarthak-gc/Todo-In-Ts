import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import register from "../../api/register";
import Label from "../Components/Label";
import Input from "../Components/Input";
import FormHeading from "../Components/FormHeading";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      alert(response.data);
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center px-12 sm:px-12">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-black p-8 rounded-lg  w-full    lg:w-3/5   shadow-lg border border-gray-700"
      >
        <FormHeading title={"Register"} />

        <div className="mb-4">
          <Label forHtml={"firstName"} label={"First Name"} />
          <Input label={"firstName"} handleChange={handleChange} />
        </div>

        <div className="mb-4">
          <Label forHtml={"lastName"} label={"Last Name"} />
          <Input label={"lastName"} handleChange={handleChange} />
        </div>

        <div className="mb-4">
          <Label forHtml={"email"} label={"Email"} />
          <Input label={"email"} handleChange={handleChange} />
        </div>

        <div className="mb-6">
          <Label forHtml={"password"} label={"Password"} />
          <Input label={"password"} handleChange={handleChange} />
        </div>

        <div className=" items-center justify-center text-center">
          <button className="px-6 py-3 text-white bg-black border-2 w-full border-gray-700 cursor-pointer  hover:text-gray-300 rounded-lg shadow-md  text-2xl hover:border-gray-500">
            Register
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FFEB3B] hover:text-[#FFDA2A]">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
