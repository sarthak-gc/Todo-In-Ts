import axios from "axios";

const changeStatus = async (id: string) => {
  const response = await axios.put(
    `http://localhost:3000/todo/changeStatus/${id}`,
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
