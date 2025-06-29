
import { useState } from 'react';
import '../../style/style.css';
import TodoData from './todoData'
import TodoInput from './todoInput'
import imglogo from '../../assets/react.svg'
 const TodoApp = () => {
    const [dataTodoList, setTodoList] = useState([
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

    const deteleItem = (id) => {
      const dataDelete = dataTodoList.filter(item => item.id !== id);
      setTodoList(dataDelete);
    }

    return (
      <>
        <div className="todo-container">
          <div className="todo-title">Todo List</div>
          <TodoInput
            addNewToDo={addNewToDo} />
          {dataTodoList.length > 0 ?
            <TodoData
              dataTodoList={dataTodoList}
              deteleItem={deteleItem} />
            :
            <div className='todo-image'>
              <img src={imglogo} alt="" />
            </div>
          }
        </div>
      </>
    )
  }

  export default TodoApp;