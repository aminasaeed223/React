import { useState } from "react";

function Accordian(){
    const [selected, setSelected] = useState(null);
    return(
        <>
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length >0 ? : <p>Data is not found</p>
                }
            </div>

        </div>
        
        </>
    )
}
export default Accordian;