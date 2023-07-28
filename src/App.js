
import './App.css';
// import Scoreboard from "./Scoreboard"

import { useState } from 'react';

function App() {

const [deviceNameInputValue, setDeviceNameInputValue] = useState("") 
const [devices, setDevices] = useState(["iphone", "mac", "samsung", "windows"])
const devicesList = devices.map((device) => {
  return <li>{device}</li>
});

function handleAddClick (){

  setDevices([...devices, deviceNameInputValue]);
  // const newDevices = [...devices];
  // newDevices.push(deviceNameInputValue)
  // setDevices(newDevices)
  
}
 
  return (
    <div className="App" style={{
      paddingTop: "100px"
    }}>
     
      {/* <Form /> */}
      {/* <Scoreboard /> */}
      {devicesList}
      <label>Device Name:</label>
      <input type="text" value={deviceNameInputValue} onChange={(event) => {setDeviceNameInputValue(event.target.value)}}/>
      <button onClick={handleAddClick}>Add</button>
      
    </div>
  );
}

export default App;
