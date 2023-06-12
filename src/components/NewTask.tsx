import { format } from "date-fns";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import { Task } from "../types/Task";

interface NewTaskProps {
  onNewTask: (task: Task) => void;
}

export default function NewTask({ onNewTask }: NewTaskProps) {
  const defaultValues = {
    title: "",
    completed: false,
    dueDate: new Date(),
  };

  const { register, handleSubmit, setFocus, reset } = useForm<Task>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Task> = (data) => {
    reset({ ...defaultValues });
    onNewTask(data);
  };

  const onClick = () => {
    setFocus("title");
  };

  return (
    <form
      className="flex cursor-text items-center gap-4 rounded-lg bg-white p-4 text-left"
      onSubmit={handleSubmit(onSubmit)}
      onClick={onClick}
    >
      <IoCheckmarkCircleOutline className="h-8 w-8 text-silver/20" />
      <div className="grow">
        <input
          type="text"
          placeholder="nova tarefa"
          className="w-full font-bold text-black placeholder-silver outline-none"
          {...register("title", { required: true })}
        />
        <p className="text-sm font-light text-silver">
          {format(new Date(), "PP")}
        </p>
      </div>
    </form>
  );
}
