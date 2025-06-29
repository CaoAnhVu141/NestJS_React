

const TodoData = (props) => {
    const {name,age,data,deteleItem} = props;

    const handleClickDelete = (id) => {
      deteleItem(id);
    }
    return (
      <>
      <div className="parent-data">
        <div className="todo-data">
        {props.dataTodoList.map((item,index) => {
          return (
            <>
            <div className="show-data-todo" key={item.id}>
            <div>{item.name}</div>
            <button className="btn-delete-item" onClick={() => handleClickDelete(item.id)}>Delete</button>
            </div>
            </>
          )
        })}
      </div>
      </div>
      </>
    )
}

export default TodoData;