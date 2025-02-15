import axios from "axios";

const deleteAllTodos = async () => {
  const response = await axios.delete(
    "https://todo-in-ts.onrender.com/todo/deleteAll",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

export default deleteAllTodos;
