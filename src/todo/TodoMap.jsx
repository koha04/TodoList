import PropTypes from "prop-types";
import React, { useReducer } from "react";
import EditTodo from "./EditTodo";
import TodoList from "./TodoList";

const initialValues = {
  editTodo: null,
  newTodo: "",
  searchTodo: "",
};

const editNewTodoReducer = (state, action) => {
  switch (action.type) {
    case "searchTodo":
      return { ...state, searchTodo: action.payload };
    case "setEditTodo":
      return { ...state, editTodo: action.payload };
    case "setNewTodo":
      return { ...state, newTodo: action.payload };
    case "newTodo":
      return { ...state, newTodo: action.payload };
    case "reset":
      return initialValues;
    default:
      return state;
  }
};

export const TodoMap = ({ todolist, setTodoList }) => {
  const [editNewTodo, editNewTodoDispatch] = useReducer(
    editNewTodoReducer,
    initialValues
  );

  const { editTodo, newTodo, searchTodo } = editNewTodo;

  const handleRemove = (id) => {
    setTodoList(todolist.filter((item) => item.id !== id));
  };

  const handleEdit = (todo) => {
    editNewTodoDispatch({ type: "setEditTodo", payload: todo });
    editNewTodoDispatch({ type: "setNewTodo", payload: todo.name });
  };

  const handleNewTodo = (e) => {
    editNewTodoDispatch({ type: "newTodo", payload: e.target.value });
  };

  const handleSave = () => {
    setTodoList(
      todolist.map((todo) =>
        todo.id === editTodo.id ? { ...todo, name: newTodo } : todo
      )
    );
    editNewTodoDispatch({ type: "reset" });
  };

  const handleCancel = () => {
    editNewTodoDispatch({ type: "reset" });
  };

  const handleSearch = (e) => {
    editNewTodoDispatch({ type: "searchTodo", payload: e.target.value });
  };

  const todoSearch = todolist.filter((todo) =>
    todo.name.toLowerCase().includes(searchTodo.toLowerCase())
  );

  return (
    <div className="wrapper">
      <input
        type="search"
        name="searchTodo"
        value={searchTodo}
        id="searchTodo"
        placeholder="Search Todo..."
        onChange={handleSearch}
      />
      {todoSearch.map((todo) => {
        return editTodo && editTodo.id === todo.id ? (
          <EditTodo
            key={todo.id}
            newTodo={newTodo}
            handleNewTodo={handleNewTodo}
            handleSave={handleSave}
            handleCancel={handleCancel}
          />
        ) : (
          <TodoList
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

TodoMap.propTypes = {
  todolist: PropTypes.array.isRequired,
  setTodoList: PropTypes.func.isRequired,
};
