import { useState } from 'react'
import './App.css'
import PropTypes from "prop-types"

function App() {

  return (
    <>
      <HeaderWithButton />
      <br />
      <Header title="aakriti"/>
    </>
  )
}



function HeaderWithButton(){
  const [title,setTitle] =useState("Aakriti");
  function updateTitle(){
    setTitle("My name is "+ Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>update</button>
      <Header title={title}></Header>
    </>
  )

}

function Header({title}){
  return (
    <>
      {title}
    </>
  )
}

Header.propTypes={
  title:PropTypes.string.isRequired
}


export default App
