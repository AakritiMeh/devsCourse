import { useState } from "react"

const CreateToDo = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
  return (
    <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input>
        <input type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDescription(value);
        }}></input>
        <button
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function (res){
                await res.json();
                alert("todo added")
            })
        }}
        
        >Add ToDo</button>
    </div>
  )
}

export default CreateToDo