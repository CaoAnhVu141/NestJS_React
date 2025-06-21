
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

  const addNewToDo = (name) => {
    alert(`Call me: ${name}`);
  }


  return(
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoInput 
       addNewToDo={addNewToDo}/>
      <TodoData
      name={name}
      age={age}
      data={data}/>
      <div className='todo-image'>
        <img src={imglogo} alt="" />
      </div>
    </div>
  )
}

export default App
