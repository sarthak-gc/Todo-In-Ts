import axios from "axios";

const getAllTodos = async () => {
  const response = await axios.get("http://localhost:3000/todo/allTodo", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response;
};
export default getAllTodos;
