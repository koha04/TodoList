import React from "react";
import PropTypes from "prop-types";

const EditTodo = ({ newTodo, handleNewTodo, handleSave, handleCancel }) => {
  return (
    <div className="todo">
      <input
        type="text"
        name="newTodo"
        id="newTodo"
        value={newTodo}
        onChange={handleNewTodo}
      />
      <div className="btns-field">
        <button className="save" onClick={handleSave}>
          Save
        </button>
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

EditTodo.propTypes = {
  newTodo: PropTypes.string.isRequired,
  handleNewTodo: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditTodo;
