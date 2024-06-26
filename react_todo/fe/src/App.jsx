
import { useState } from 'react'
import './App.css'
import CreateToDo from "./components/CreateToDo"
import { Todos } from './components/ToDos'
function App() {
  const [todos,setTodos]=useState([]);
  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })

  return (
    <>
      <CreateToDo />
      <Todos todos={todos} />
    </>
  )
}

export default App
