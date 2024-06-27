import { useState,useEffect } from "react"
import PropTypes from "prop-types";
import axios from "axios";
const UseEffect = () => {
    const [todos,setTodos] =useState([]);
    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(function(resp){
            setTodos(resp.data.todos)
        })
    },[]);
  return (
    <>
    {todos.map((todo)=> <Todo key ={todo.id}  title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo({title,description}){
    return(
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

Todo.propTypes={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired
}

export default UseEffect