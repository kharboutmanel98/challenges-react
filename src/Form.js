import { useState } from "react";


function Form() {
    // const [nameInput, setNameInput]=useState("");
    // const [emailInput, setEmailInput]=useState("");
  const [formInputs, setFormInputs]= useState({
    name: "",
    email: "",
    age:""
    
  })
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(formInputs)
    }}>

        <label>name:</label>
        <input value={formInputs.name} onChange={(event) => {
          // const newFormInput = {...formInputs};
          // newFormInput.email = event.target.value
          // setFormInputs(newFormInput)} 
          setFormInputs({...formInputs, name: event.target.value})
        } }
        />
        <hr />
        

        <label>email:</label>
        <input value={formInputs.email} onChange={(event) => 
          setFormInputs({...formInputs, email: event.target.value})
          }
           />
        <hr />

        <label>age:</label>
        <input value={formInputs.age} onChange={(event) =>
         setFormInputs({...formInputs, age: event.target.value})} />
        <hr />
       

        <button>submit</button>
        
    </form>
  )
}

export default Form