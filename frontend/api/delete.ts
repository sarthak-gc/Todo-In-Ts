import axios from "axios";

const deleteTodo = async (id: string) => {
  const response = await axios.delete(
    `http://localhost:3000/todo/deleteTodo/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};

export default deleteTodo;
