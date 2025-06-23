
import { useState } from 'react';
import './Components/todo/todo.css'
import TodoData from './Components/todo/todoData'
import TodoInput from './Components/todo/todoInput'
import imglogo from './assets/react.svg'

function App() {
  const name = "Ruoi";
  const age = 10;
  const data = {
    address: "hanoi",
    country: "Vietnam"
  }

  const [dataTodoList,setTodoList] = useState([
      {id: 1, name: "Cao Anh Vũ"},
      {id:2,name: "Nguyễn Văn Bấc"}
  ]);

  const addNewToDo = (name) => {
    const newDataTodo = {
        id: randomIntFromInterval(1,100),
        name: name,
    }
    setTodoList([...dataTodoList,newDataTodo]);
  }

  const randomIntFromInterval = (min, max) => { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


  return(
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput 
       addNewToDo={addNewToDo}/>
      <TodoData
      name={name}
      age={age}
      data={data}
      dataTodoList={dataTodoList}/>
      <div className='todo-image'>
        <img src={imglogo} alt="" />
      </div>
    </div>
  )
}

export default App
