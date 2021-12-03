import { useState } from "react";

const ToDo = ({ value }) => {
  return <div>{value.todo}</div>;
};

export default function App() {
  const [input, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  const [todoList, updateToDosList] = useState([]);

  const add = () => {
    if (input.todo) {
      updateToDosList([...todoList, input]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
  };

  return (
    <div className="App">
      <h1>React Todo Assignment</h1>
      <div>
        <input
          type="text"
          value={input.todo}
          placeholder="enter"
          onChange={(e) =>
            setToDo({
              todo: e.target.value,
              isCompleted: false
            })
          }
        />
        <button onClick={add}>Submit</button>
      </div>
      <ul>
        {todoList.length > 0 &&
          todoList.map((value) => {
            return <ToDo value={value} />;
          })}
      </ul>
    </div>
  );
}
