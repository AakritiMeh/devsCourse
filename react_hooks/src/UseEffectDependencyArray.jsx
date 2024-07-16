import {useEffect,useState} from "react"
import PropTypes from "prop-types";
import axios from "axios"
export default function App() {
  const [todoNo,setTodoNo]=useState(1);

  return(
    <div>
      <button onClick={() =>{setTodoNo(1)}}>1</button>
      <button onClick={() =>{setTodoNo(2)}}>2</button>
      <button onClick={() =>{setTodoNo(3)}}>3</button>
      <button onClick={() =>{setTodoNo(4)}}>4</button>
      <Todo id = {todoNo}/>
    </div>  
  )
}

function Todo({id}) {
  const [todos, setTodos] = useState({})
  const getTodos = async ()=>{
    const res = await axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    console.log(res.data.todo)
    setTodos(res.data.todo)
  }
  useEffect(()=>{
    getTodos()
  },[id])

  return(
    
    <div>
      Id:{id}
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
}

Todo.propTypes={
  id:PropTypes.number.isRequired
}