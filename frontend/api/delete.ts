import axios from "axios";

const deleteTodo = async (id: string) => {
  const response = await axios.delete(
    `https://todo-in-ts.onrender.com/todo/deleteTodo/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

export default deleteTodo;
