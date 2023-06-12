import { format, parseISO } from "date-fns";
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

import classNames from "classnames";
import { Task } from "../types/Task";

interface TaskItemProps {
  task: Task;
  onCompleteTask: (task: Task) => void;
}

export default function TaskItem({ task, onCompleteTask }: TaskItemProps) {
  return (
    <button
      role="button"
      className="flex items-center gap-4 rounded-lg bg-white p-4 text-left"
      onClick={() => onCompleteTask(task)}
    >
      {task.completed ? (
        <IoCheckmarkCircleSharp className="h-8 w-8 text-royal-blue" />
      ) : (
        <IoCheckmarkCircleOutline className="h-8 w-8 text-silver" />
      )}
      <div className="grow">
        <h2
          className={classNames("font-bold text-black", {
            "line-through": !!task.completed,
          })}
        >
          {task.title}
        </h2>
        <p className="text-sm font-light text-silver">
          {format(parseISO(`${task.dueDate}`), "PP")}
        </p>
      </div>
    </button>
  );
}
