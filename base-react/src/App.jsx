
import { useState } from 'react';
import './Components/todo/todo.css'
import TodoData from './Components/todo/todoData'
import TodoInput from './Components/todo/todoInput'
import imglogo from './assets/react.svg'

function App() {

  const [dataTodoList, setTodoList] = useState([
    // {id: 1, name: "Cao Anh Vũ"},
    // {id:2,name: "Nguyễn Văn Bấc"}
  ]);

  const addNewToDo = (name) => {
    const newDataTodo = {
      id: randomIntFromInterval(1, 100),
      name: name,
    }
    setTodoList([...dataTodoList, newDataTodo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput
        addNewToDo={addNewToDo} />

      {dataTodoList.length > 0 ?
        <TodoData
          dataTodoList={dataTodoList} />
        :
        <div className='todo-image'>
          <img src={imglogo} alt="" />
        </div>
      }
    </div>
  )
}

export default App
