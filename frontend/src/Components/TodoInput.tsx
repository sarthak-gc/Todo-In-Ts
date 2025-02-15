interface TodoInputProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  value: string;
  placeholder: string;
  id: string;
  type: string;
}
const TodoInput: React.FC<TodoInputProps> = ({
  handleChange,
  value,
  placeholder,
  id,
  type,
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={`Enter your ${placeholder}`}
      className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TodoInput;
