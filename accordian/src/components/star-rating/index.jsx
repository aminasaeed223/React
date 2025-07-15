import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./style.css"

function Star({ noOfStar = 5 }) { // Destructure props correctly
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getIndex) {
        setRating(getIndex);
    }

    function handleMouseEnter(getIndex) {
        setHover(getIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStar)].map((_, index) => {
                    index += 1; // Make index 1-based

                    return (
                        <FaStar
                            key={index}
                            className={index <= (hover || rating) ? 'active' : 'inactive'}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)} // Corrected event
                            onMouseLeave={handleMouseLeave} // No argument needed
                            size={40}
                        />
                    );
                })
            }
        </div>
    );
}

export default Star;