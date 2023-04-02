/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";

export const AddTodo = ({ todo, setTodo, todolist, setTodoList }) => {
  const addTodo = useCallback((e) => {
    setTodo(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    setTodoList([...todolist, { id: Date.now(), name: todo }]);
    setTodo("");
    inputFocus.current.focus();
  }, [todo]);

  const inputFocus = useRef();

  return (
    <div className="wrapper-input">
      <input
        type="text"
        name="todo"
        id="input"
        value={todo}
        ref={inputFocus}
        placeholder="Add todo..."
        onChange={addTodo}
      />
      <button 
        className="btn"
        disabled={todo ? false : true}
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </div>
  );
};

AddTodo.propTypes = {
  todo: PropTypes.string.isRequired,
  setTodo: PropTypes.func.isRequired,
  todolist: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};

AddTodo.defaultProps = {
  todo: "Invalid Todo",
};
