import axios from "axios";

const changeStatus = async (id: string) => {
  const response = await axios.put(
    `https://todo-in-ts.onrender.com/todo/changeStatus/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response;
};
export default changeStatus;
