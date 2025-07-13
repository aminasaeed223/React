// import { useState } from "react";
import { useRef } from "react";

function Accordian(){
    // const [selected, setSelected] = useState(null);
    const inputRef = useRef(null);
    function handle (){
        console.log(inputRef);
        inputRef.current.focus();
    }
    return(
        <>
        <h1>Useref</h1>
        <input ref = {inputRef} type="text" placeholder="enter your name" />
        <button onClick={handle}>Submit</button>
{/* 

        { <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length >0 ? : <p>Data is not found</p>
                }
            </div>

        </div> } */}
        
        </>
    )
}
export default Accordian;