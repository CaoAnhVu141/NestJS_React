

const TodoData = (props) => {
    const {name,age,data} = props;
    return (
        <div className="todo-data">
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