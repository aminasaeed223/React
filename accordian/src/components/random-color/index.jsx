import { useState } from "react";

function RandomColor() {
    const [color, setColor] = useState('#000000');
    const [type, setType] = useState('hex');

    function random(length) {
        return Math.floor(Math.random() * length);
    }

    function handleHex() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[random(hex.length)];
        }
        setColor(hexColor);
    }

    function handleRgb() {
        const r = random(256);
        const g = random(256);
        const b = random(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    const generateColor = () => {
        if (type === 'hex') {
            handleHex();
        } else {
            handleRgb();
        }
    };

    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: color,
                }}>
            </div>
            <div className="container">
                <button onClick={generateColor}>Generate Random Color</button>
                <button onClick={() => setType('hex')}>HEX Color</button>
                <button onClick={() => setType('rgb')}>RGB Color</button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    marginTop: '50px'
                }}
            >
                <h3>{type === 'rgb' ? 'RGB Colour' : 'HEX Colour'}</h3>
                <h1>{color}</h1>
            </div>
        </>
    );
}

export default RandomColor;