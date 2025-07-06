import { useEffect, useState } from 'react'


function Clock(){
    const [set, setTime] = useState(0)
   useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000); // Update every second

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
}, []);
  
        
        
        
       
    return(
        <div>
            <select >
            <option value={"red"}>red</option>
            <option value={"green"}>green</option>
            <option value={"yellow"}>yellow</option>
            </select>
        <h1
        style = {{color:"orange", padding: "30px", width: "200px", backgroundColor: "blueviolet"}}
        
        >Digital Clock {set}</h1>
        </div>
    )
}
export default Clock