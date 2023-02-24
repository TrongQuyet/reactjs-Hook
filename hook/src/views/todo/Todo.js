
const Todo = (props)=>{

    const{todos,deletetodo} = props;
    //viet funtion truc tiep
    let handledelete=(id)=>{
      deletetodo(id)

    };
return(
    <div className="list">
          {todos.map(todo=>{
            return (
              <div key={todo.id}>
                  <span style={{color: 'white'}} >{todo.name}</span>	&nbsp; 	&nbsp;
                  <span style={{color: 'white'}} className="delete" onClick={()=>{handledelete(todo.id)}}>x</span>
              </div>
              
            )
          })}
        </div>
)
}
export default Todo;