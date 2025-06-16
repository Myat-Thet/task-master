import { useEffect, useState } from "react";
import type { TodoDto } from "../model/TodoDto";
import { completedAllTask, completedTask, getAllTasks, uncompletedAllTask, uncompletedTask } from "../service/TodoService";

interface AllTodoTasksProps {
  filter?: "all" | "completed" | "uncompleted";
}

export default function AllTodoTasksComponent({ filter = "all" }: AllTodoTasksProps) {
  const [todos, setTodos] = useState<TodoDto[]>([]);

  useEffect(() => {
    if (filter === "completed") {
      completedAllTask(true).then((res) => setTodos(res.data));
    } else if (filter === "uncompleted") {
      uncompletedAllTask(false).then((res) => setTodos(res.data));
    } else {
      getAllTasks().then((res) => setTodos(res.data));
    }
  }, [filter]);

  const toggleCompleted = (todo: TodoDto) => {
    const action = todo.completed ? uncompletedTask : completedTask;
    action(todo.id as number)
      .then(() => {
        setTodos((prev) =>
          prev.map((t) =>
            t.id === todo.id ? { ...t, completed: !todo.completed } : t
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {filter === "completed"
          ? "Completed Tasks"
          : filter === "uncompleted"
          ? "Uncompleted Tasks"
          : "All Tasks"}
      </h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div className="flex flex-col">
              <span
                className={`font-semibold text-lg ${
                  todo.completed ? "line-through text-gray-400" : "text-gray-900"
                }`}
              >
                {todo.taskName}
              </span>
              <span className="text-sm text-gray-600">{todo.description}</span>
            </div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompleted(todo)}
              className="w-6 h-6 accent-green-500 cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
