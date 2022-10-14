import { createContext, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext(); // retorna un objeto. "TaskContent" es el nombre del contexto

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
