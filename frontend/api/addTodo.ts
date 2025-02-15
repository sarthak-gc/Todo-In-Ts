import axios from "axios";
const addTodo = async ({
  description,
  title,
  dueDate,
  timeLimit,
  priority,
}: {
  description: string;
  title: string;
  dueDate: string | Date;
  timeLimit: string | Date;
  priority: string;
}) => {
  const response = await axios.post(
    "http://localhost:3000/todo/addTodo",
    {
      description,
      title,
      dueDate,
      timeLimit,
      priority,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

export default addTodo;
