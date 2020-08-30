import React, { useState } from "react";

import { ListItem } from "./components/ListItem";
import { TaskField } from "./components/TaskField";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Создать список задач",
      completed: true,
    },
    {
      text: "Поспать",
      completed: false,
    },
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, curIndex) => {
        if (index === curIndex) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, curIndex) => index !== curIndex)
    );
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Список задач</h4>
      </div>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}
