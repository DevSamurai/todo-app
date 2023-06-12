import { format } from "date-fns";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewTask from "./components/NewTask";
import TaskItem from "./components/TaskItem";

import { createTask, getTasks, updateTask } from "./services/api";

import { Task } from "./types/Task";

export default function App() {
  useEffect(() => {
    (async () => {
      loadTasks();
    })();
  }, []);

  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const handleNewTask = async (task: Task) => {
    await createTask({ id: uuidv4(), ...task });
    loadTasks();
  };

  const handleCompleteTask = async (task: Task) => {
    await updateTask({ ...task, completed: !task.completed });
    loadTasks();
  };

  return (
    <main className="container mx-auto my-10 max-w-3xl">
      <section className="mb-10">
        <h1 className="text-3xl font-bold">Minhas Tarefas</h1>
        <p className="text-silver">{format(new Date(), "PP")}</p>
      </section>
      <section className="flex flex-col gap-4">
        <NewTask onNewTask={handleNewTask} />

        {tasks?.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onCompleteTask={handleCompleteTask}
          />
        ))}
      </section>
    </main>
  );
}
