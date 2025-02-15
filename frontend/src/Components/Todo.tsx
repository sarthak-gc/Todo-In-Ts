import ChangeStatusBtn from "./ChangeStatusBtn";
import DeleteTodo from "./DeleteTodo";
import DueDate from "./DueDate";
import Priority from "./Priority";
import TodoDescription from "./TodoDescription";
import TodoTitle from "./TodoTitle";

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  timeLimit: string;
  dueDate: string;
  priority: string;
}

interface TodoProp {
  todo: Todo;
  handleDelete: (id: string) => Promise<void>;
  changeWorkStatus: (id: string) => Promise<void>;
}

const Todo: React.FC<TodoProp> = ({ todo, handleDelete, changeWorkStatus }) => {
  return (
    <div>
      <div
        key={todo._id}
        className="grid grid-cols-[85%,5%,10%] gap-4 bg-gray-800 p-6 rounded-lg shadow-lg mb-1"
      >
        <div>
          <div className="flex">
            <div className=" py-4   rounded-lg flex items-center w-full  justify-between">
              <div className="flex gap-4  items-center">
                <TodoTitle title={todo.title} />
                <Priority priority={todo.priority} />
              </div>
              <DeleteTodo handleDelete={handleDelete} id={todo._id} />
            </div>
          </div>
          <TodoDescription description={todo.description} />
          <DueDate timeLimit={todo.timeLimit} dueDate={todo.dueDate} />
        </div>

        <div className="flex items-center space-x-4">
          <ChangeStatusBtn
            changeWorkStatus={changeWorkStatus}
            id={todo._id}
            completed={todo.completed}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
