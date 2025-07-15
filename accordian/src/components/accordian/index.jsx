import { useState } from "react";
import Data from "./data";
import "./style.css";

function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enable, setEnable] = useState(false);
    const [multiID, setMultiID] = useState([]);

    function handleSingle(currID) {
        setSelected(currID === selected ? null : currID);
    }

    function handleMulti(currID) {
        let copyMulti = [...multiID];
        const findIndex = copyMulti.indexOf(currID);

        if (findIndex === -1) {
            copyMulti.push(currID);
        } else {
            copyMulti.splice(findIndex, 1);
        }
        setMultiID(copyMulti);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setEnable(!enable)}>
                {enable ? "Disable Multi-Selection" : "Enable Multi-Selection"}
            </button>
            <div className="accordion">
                {Data && Data.length > 0 ? 
                    Data.map(dataItem => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={enable ? () => handleMulti(dataItem.id) : () => handleSingle(dataItem.id)}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>{enable && multiID.includes(dataItem.id) ? '-' : '+'}</span>
                            </div>
                            {enable ? (
                                multiID.includes(dataItem.id) && <div className="content">{dataItem.answer}</div>
                            ) : (
                                selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            )}
                        </div>
                    )) : (
                        <div>Data not found</div>
                    )}
            </div>
        </div>
    );
}
export default Accordian;