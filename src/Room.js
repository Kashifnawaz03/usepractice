import React, { useState } from 'react';
import './Newd.css'

function Room() {
    let [isLit, setLit] = useState(false);
    let [tem, setTem] = useState(72);

  return (
   <div>
Please press the Button to turn On/Off lights.
<br/>
<button onClick>On</button>
<button onClick>Off</button>
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