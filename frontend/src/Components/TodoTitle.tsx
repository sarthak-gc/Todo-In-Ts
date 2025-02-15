interface TodoTitleProp {
  title: string;
}
const TodoTitle: React.FC<TodoTitleProp> = ({ title }) => {
  return <h4 className="font-semibold text-white text-xl ">{title}</h4>;
};

export default TodoTitle;
