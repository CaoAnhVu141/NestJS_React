

const TodoData = (props) => {
    const {name,age,data} = props;
    return (
        <div className="todo-data">
        {props.dataTodoList.map((item,index) => {
          return (
            <>
            <div className="show-data-todo">
            <div>{item.name}</div>
            <button className="btn-delete-item">Delete</button>
            </div>
            </>
          )
        })}
        <div>My name is {name}</div>
        <div>Age: {age}</div>
        <div>Data 02</div>
        <div>
          {JSON.stringify(props.dataTodoList)}
        </div>
      </div>
    )
}

export default TodoData;