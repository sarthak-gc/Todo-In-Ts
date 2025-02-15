import { ChangeEvent } from "react";

interface InputProp {
  label: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProp> = ({ label, handleChange }) => {
  return (
    <input
      className="outline-none w-full p-3 bg-gray-900 text-white rounded-md border border-gray-700  "
      onChange={(e) => {
        handleChange(e);
      }}
      type={label}
      id={label}
      name={label}
      placeholder={`Enter your ${label}`}
    />
  );
};

export default Input;
