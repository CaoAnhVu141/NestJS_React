import { useState } from "react";


const TodoInput = (props) => {
    
    const [valueInput,setValueInput] = useState("Eric")

    const {addNewToDo} = props;

    const handleFunction = () => {
        alert(valueInput);
    }

    const handleOnChange = (name) => {
        console.log("Handle on change",name);
        setValueInput(name);
    }

    return (
        <div className='todo-input'>
        <input type="text" className='input-enter' placeholder='enter your task' onChange={(event) => {handleOnChange(event.target.value)}}/>
        <button className='btn-add' onClick={handleFunction}>Add</button>
        <div>
            My name is: {valueInput}
        </div>
      </div>
    )
}

export default TodoInput;