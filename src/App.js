import { useState } from "react";
import "./App.css";
import { AddTodo } from "./todo/AddTodo";
import { Title } from "./todo/Title";
import { TodoMap } from "./todo/TodoMap";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <div className="main">
        <Title>
          <AddTodo
            todo={todo}
            setTodo={setTodo}
            todolist={todolist}
            setTodoList={setTodoList}
          />
          <TodoMap todolist={todolist} setTodoList={setTodoList} />
        </Title>
      </div>
    </div>
  );
}

export default App;
