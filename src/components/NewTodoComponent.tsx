import { useState } from "react";
import { createTask } from "../service/TodoService";
import { useNavigate } from "react-router-dom";

export default function NewTodoComponent() {
  const navigater = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const createHandler = (e: any) => {
    e.preventDefault();
    const todoDto = {
      taskName,
      description,
    };
    createTask(todoDto)
      .then((res) => {
        console.log(res.data);
        navigater("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="flex w-[1520px] p-5 m-5">
        <div className="w-[600px]">
          <div className="bg-green-300 rounded p-5">
            <form onSubmit={createHandler}>
              <div className="mb-5">
                <label htmlFor="taskName">Task Name</label>
                <input
                  type="text"
                  value={taskName}
                  required
                  onChange={(e) => setTaskName(e.target.value)}
                  className="w-full border rounded p-2"
                  placeholder="Enter New Task"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded p-2"
                  placeholder="Enter New Description"
                />
              </div>
              <button type="submit" className="btn btn-info hover:bg-white">
                Add New Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
