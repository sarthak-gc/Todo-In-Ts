import { useEffect, useState } from "react";
import getAllTodos from "../../api/getAllTodos";
import { useNavigate } from "react-router-dom";
import Line from "../Components/Line";
import addTodo from "../../api/addTodo";
import changeStatus from "../../api/changeStatus";
import UserMenu from "../Components/UserMenu";
import deleteAllTodos from "../../api/deleteAll";
import deleteTodo from "../../api/delete";
import FormHeading from "../Components/FormHeading";
import Label from "../Components/Label";
import TodoInput from "../Components/TodoInput";
import Todo from "../Components/Todo";

interface Todos {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  timeLimit: string;
  dueDate: string;
  priority: string;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [sortCriteria, setSortCriteria] = useState<string>("");
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: false,
    timeLimit: "",
    dueDate: "",
    priority: "clear",
  });

  const handleDeleteAllTodos = async () => {
    const response = await deleteAllTodos();
    if (response.data.msg == "All Todos Deleted") setTodos([]);
    alert("All todos have been deleted.");
  };

  const getAllTodosFirst = async () => {
    const response = await getAllTodos();
    if (response.data.msg === "user not found in the database") {
      alert("User Not Found in DB");
      navigate("/login");
    } else setTodos(response.data.todo);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTodo({
      ...todo,
      [e.target.id]: e.target.value,
    });
  };

  const changeWorkStatus = async (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    await changeStatus(id);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await addTodo(todo);

    if (response.data) {
      const newTodo: Todo = response.data.todo;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setTodo({
      title: "",
      description: "",
      completed: false,
      timeLimit: "",
      dueDate: "",
      priority: "clear",
    });
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };
  const sortTodos = (todos: Todo[]) => {
    switch (sortCriteria) {
      case "priority":
        return [...todos].sort((a, b) => (a.priority > b.priority ? -1 : 1));
      case "due":
        return [...todos].sort(
          (a, b) =>
            new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
        );
      case "completed":
        return [...todos].sort((a, b) =>
          a.completed === b.completed ? 0 : a.completed ? -1 : 1
        );
      default:
        return todos;
    }
  };

  useEffect(() => {
    getAllTodosFirst();
  }, []);

  const sortedTodos: Todos[] = sortTodos(todos);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center p-8 absolute">
      <form
        className="bg-black p-10 rounded-lg w-1/2  shadow-lg border border-gray-700 h-fit mb-6"
        onSubmit={handleSubmit}
      >
        <FormHeading title={"Add Todo"} />

        <div className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="mb-6">
              <Label forHtml={"title"} label="Todo Title" />

              <TodoInput
                value={todo.title}
                handleChange={handleChange}
                placeholder="Todo Title"
                id={"title"}
                type={"text"}
              />
            </div>

            <div className="mb-6">
              <Label forHtml={"priority"} label="Priority" />

              <select
                id="priority"
                className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                value={todo.priority}
                onChange={handleChange}
              >
                <option value="clear">No Priority</option>
                <option value="low">Low</option>
                <option value="mid">Medium</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="mb-6">
              <Label forHtml={"dueDate"} label="Due Date" />
              <TodoInput
                value={todo.dueDate}
                handleChange={handleChange}
                placeholder=""
                id={"dueDate"}
                type="date"
              />
            </div>

            <div className="mb-6">
              <Label forHtml={"timeLimit"} label="Time Limit" />

              <TodoInput
                value={todo.timeLimit}
                handleChange={handleChange}
                placeholder=""
                id={"timeLimit"}
                type={"time"}
              />
            </div>
          </div>

          <div className="mb-6">
            <Label forHtml={"description"} label="Todo Description" />

            <TodoInput
              value={todo.description}
              handleChange={handleChange}
              placeholder="description"
              id={"description"}
              type={"text"}
            />
          </div>
        </div>

        <div className=" items-center justify-center text-center">
          <button className="px-6 py-3 text-white bg-black border-2 w-full border-gray-700 cursor-pointer  hover:text-gray-300 rounded-lg shadow-md  text-2xl hover:border-gray-500">
            Add Todo
          </button>
        </div>
      </form>
      <Line />
      <div className="mt-8 w-1/2 max-w-4xl h-2/5  overflow-auto">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 rounded-t-lg bg-gray-800 text-white shadow-lg">
          <h3 className="text-xl font-bold">Your Todos</h3>
          <select
            className="text-sm bg-gray-900 text-white p-2 rounded-md"
            value={sortCriteria}
            onChange={handleSortChange}
          >
            <option value="">Sort by</option>
            <option value="priority">Priority</option>
            <option value="due">Due Date</option>
            <option value="completed">Completion Status</option>
          </select>
        </div>

        <div className=" overflow-auto mt-2  rounded-b-lg shadow-lg">
          {sortedTodos.length > 0 ? (
            sortedTodos.map((todo) => (
              <Todo
                todo={todo}
                handleDelete={handleDelete}
                changeWorkStatus={changeWorkStatus}
              />
            ))
          ) : (
            <p className="text-center text-gray-400">
              No todos available. Add one to get started!
            </p>
          )}
        </div>
      </div>
      <UserMenu handleDeleteAllTodos={handleDeleteAllTodos} />
    </div>
  );
};

export default Todos;
