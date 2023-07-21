import { useState } from "react";


function Form() {
   
  const [formInputs, setFormInputs]= useState({
    name: "",
    email: "",
    age:"", 
    generalInfo:"",
    isStudent: false,
    country:"",
    status:""
    
  })

  function handleCheckBoxChecked(event) {
    setFormInputs({...formInputs, isStudent: event.target.checked})
  }
  
  return (
    <form onSubmit={(event)=>{
        event.preventDefault()
        console.log(formInputs)
    }}>

        <label>Name:</label>
        <input value={formInputs.name} onChange={(event) => {
          setFormInputs({...formInputs, name: event.target.value})
        } }
        />
        <hr />
        

        <label>Email:</label>
        <input value={formInputs.email} onChange={(event) => 
          setFormInputs({...formInputs, email: event.target.value})
          }
           />
        <hr />

        <label>Age:</label>
        <input value={formInputs.age} onChange={(event) =>
         setFormInputs({...formInputs, age: event.target.value})} />
        <hr />
        
        <label>Are you student</label>
        <input  type="checkbox"  checked={formInputs.isStudent} onChange={handleCheckBoxChecked}/>
        <hr />

          <div>
          <input 
                 value="student"
                 type="radio" name="status" 
                 checked={formInputs.status == "student"}
                 onChange={(event) =>
                 setFormInputs({...formInputs, status: event.target.value})}
                 />
          student
          <input 
                 value="teacher"
                 type="radio" name="status" 
                 checked={formInputs.status == "teacher"}
                 onChange={(event) =>
                 setFormInputs({...formInputs, status: event.target.value})}
                 />
          teacher
          </div>
          <hr />

        <select value={formInputs.country} onChange={(event) =>
         setFormInputs({...formInputs, country: event.target.value})} >
          <option>Jordan</option>
          <option>Marshall Islands</option>
          <option>Kenya</option>
        </select>
        <hr />

        <label>General Info</label>
        <textarea value={formInputs.generalInfo} onChange={(event) => {
           setFormInputs({...formInputs, generalInfo: event.target.value})
        }} />
        <hr />  
        <button>submit</button>
        
    </form>
  )
}

export default Form