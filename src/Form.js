import { useState } from "react";


function Form() {
    // const [nameInput, setNameInput]=useState("");
    // const [emailInput, setEmailInput]=useState("");
  const [formInputs, setFormInputs]= useState({
    name: "",
    email: ""
  })
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(formInputs, setFormInputs)
    }}>

        <label>name:</label>
        <input value={formInputs.name} onChange={(event) => setFormInputs({ name:event.target.value})}/>
        <hr />
        {/* <input value={nameInput} onChange={(event) => {setNameInput(event.target.value)}}/>
        <hr /> */}

        <label>email:</label>
        <input value={formInputs.email} onChange={(event) => setFormInputs({ email:event.target.value})} />
        <hr />
        {/* <input value={emailInput} onChange={(event) => {setEmailInput(event.target.value)}}/>
        <hr /> */}

        <button>submit</button>
        
    </form>
  )
}

export default Form