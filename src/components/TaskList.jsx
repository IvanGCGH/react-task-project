import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  // desesctructuro "props" al objeto "tasks"

  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-3xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
