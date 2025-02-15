interface TodoDescriptionProp {
  description: string;
}
const TodoDescription: React.FC<TodoDescriptionProp> = ({ description }) => {
  return <p className="text-sm text-gray-400">{description}</p>;
};

export default TodoDescription;
