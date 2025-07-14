import { useState } from "react";
import Data from "./data"
import "./style.css"


function Accordian() {
    const [selected, setSelected] = useState(null);
    // const Data = []; 
function handlesingle(currID){
    // console.log(currID)
    setSelected(currID === selected ? null : currID)

}

    return (
        <div className="wrapper">
            <div className="accordian">
           {
            Data && Data.length > 0 ? 
                    Data.map(dataItem =><div className = "item">
                        <div onClick = {()=>handlesingle(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            selected == dataItem.id ?
                            <div className = "content">{dataItem.answer}</div>:null
                        }

                    </div>)
                    :  <div>Data not found</div>
               
                
                }
            </div>
        </div>
    );
    
}
export default Accordian;