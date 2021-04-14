import React, { useState } from 'react';
import './Newd.css'

function Room() {
    let [isLit, setLit] = useState(false);
   
   
    let [tem, setTem] = useState(72);
    
    
  

  return (
   <div className={"room "+(isLit?"lit":"dark")}>
Please press the Button to turn On/Off lights.
<br/>
<button onClick  = { ()=> {
        
        setLit(!false);
    }}>On</button>
<button onClick = { ()=> {
     
        setLit(false);
    }}>Off</button>
<br/>
The temprature of the room is : {tem} 
<br/>
please the button to Increase/Decrease Temp.
<br/>
<button onClick = { ()=> {
        
        setTem(++tem)}} >+</button>
<button onClick = { ()=> {
        
        setTem(--tem)}} >-</button>
   </div>
  );

}
export default Room;