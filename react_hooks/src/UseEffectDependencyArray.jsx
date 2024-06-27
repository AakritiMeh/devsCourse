import {useEffect,useState} from "react"
import axios from "axios"
export default function UseEffectDependencyArray() {

  return(
    <div>
      <Todo id = {5}/>
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
  },[])

  return(
    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
}