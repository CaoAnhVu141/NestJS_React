

const TodoInput = (props) => {
    console.log("check props: ",props);
    const {addNewToDo} = props;
    // addNewToDo("Vũ Ruồi");
    return (
        <div className='todo-input'>
        <input type="text" className='input-enter' placeholder='enter your task'/>
        <button className='btn-add'>Add</button>
      </div>
    )
}

export default TodoInput;