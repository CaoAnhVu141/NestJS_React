

const TodoData = (props) => {
    const {name,age,data} = props;
    return (
        <div className="todo-data">
        {props.dataTodoList.map((item,index) => {
          return (
            <>
            <div className="show-data-todo" key={item.id}>
            <div>{item.name}</div>
            <button className="btn-delete-item">Delete</button>
            </div>
            </>
          )
        })}
      </div>
    )
}

export default TodoData;