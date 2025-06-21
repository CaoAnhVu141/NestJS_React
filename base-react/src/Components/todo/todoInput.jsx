

const TodoInput = (props) => {
    console.log("check props: ",props);
    const {addNewToDo} = props;
    // addNewToDo("Vũ Ruồi");

    const handleFunction = () => {
        alert("Bấm vào cho anh");
    }

    const handleOnChange = (name) => {
        console.log("Handle on change",name);
    }

    return (
        <div className='todo-input'>
        <input type="text" className='input-enter' placeholder='enter your task' onChange={(event) => {handleOnChange(event.target.value)}}/>
        <button className='btn-add' onClick={handleFunction}>Add</button>
      </div>
    )
}

export default TodoInput;