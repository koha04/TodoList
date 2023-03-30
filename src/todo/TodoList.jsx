import React from "react";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todo, handleEdit, handleRemove }) => {
  return (
    <div className="todo">
      <p className="text">{todo.name}</p>
      <div className="icons-field">
        <AiFillEdit cursor="pointer" onClick={() => handleEdit(todo)} />
        <MdDelete cursor="pointer" onClick={() => handleRemove(todo.id)} />
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TodoList;
