import axios from "axios";

const deleteAllTodos = async () => {
  const response = await axios.delete("http://localhost:3000/todo/deleteAll", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return response;
};

export default deleteAllTodos;
