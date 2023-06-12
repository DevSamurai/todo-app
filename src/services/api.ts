import axios from "axios";

import { Task } from "../types/Task";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
});

export async function getTasks(): Promise<Task[]> {
  const { data } = await api.get("/tasks");
  return data;
}

export async function createTask(task: Task) {
  const { data } = await api.post("/tasks", task);
  return data;
}

export async function updateTask(task: Task) {
  const { data } = await api.patch(`/tasks/${task.id}`, task);
  return data;
}
