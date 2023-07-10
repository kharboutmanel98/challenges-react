import React from 'react'

import { useState } from 'react'


var name = "Asma"
const MyButton = () => {

    const [name, setName] = useState("marwa")

    function buttonClicked(){
        if(name == "Asma"){
        setName("yahya");
    }else{
        setName("Asma")
    }
    }
  return (
    <div>
        <button onClick={buttonClicked}>Click me</button>
        <h1>{name}</h1>
    </div>
  )
}


export default MyButton