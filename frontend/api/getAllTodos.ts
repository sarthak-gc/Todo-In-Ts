import axios from "axios";

const getAllTodos = async () => {
  const response = await axios.get(
    "https://todo-in-ts.onrender.com/todo/allTodo",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};
export default getAllTodos;
