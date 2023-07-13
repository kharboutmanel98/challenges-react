import { useState } from "react"


function Input() {
   const [inputValue, setInputValue]= useState("");

    function handelInputChange(event) {
        setInputValue(event.target.value)
        // alert('hello')
    }
  return (
    <div>
        <label>
            your name:
        </label>
        <input  
            onChange={handelInputChange}
            value={inputValue}/>
    </div>
  )
}

export default Input