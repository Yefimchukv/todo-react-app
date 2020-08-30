import React, { useState } from "react";

export const TaskField = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    const value = event.currentTarget.value;
    setText(value);
  };

  const addTask = () => {
    if (text) {
      onAddTask(text);
      setText("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      addTask();
    }
  };

  return (
    <div className="todo__add-field">
      <input
        value={text}
        onChange={handleInputChange}
        type="text"
        placeholder="Введите текст задачи..."
        onKeyUp={handleKeyUp}
      />
      <button onClick={addTask} className="todo__add-field-button">
        <svg
          height="20px"
          viewBox="0 0 448 448"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
        </svg>
      </button>
    </div>
  );
};
