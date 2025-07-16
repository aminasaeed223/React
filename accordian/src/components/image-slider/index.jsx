import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "./style.css";

function Image({ url, limit = 5, page = 1 }) {
    const [image, setImage] = useState([]);
    const [slide, setSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImage(data);
            }
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    function handlePrev() {
        setSlide(slide === 0 ? image.length - 1 : slide - 1);
    }

    function handleNext() {
        setSlide(slide === image.length - 1 ? 0 : slide + 1);
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    if (loading) {
        return <p>Loading data... Please wait!!</p>;
    }
    if (error != null) {
        return <p>Oops! An error occurred: {error}</p>;
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left" />
            {
                image && image.length ?
                    image.map((ImageItem, index) => (
                        <img
                            key={ImageItem.id}
                            alt={ImageItem.download_url}
                            src={ImageItem.download_url}
                            className={slide === index ? "current-image" : "current-image hide"}
                        />
                    )) :
                    null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    image && image.length ?
                        image.map((_, index) => (
                            <button
                                key={index}
                                className={slide === index ? "current-indicator" : "current-indicator hide"}
                            />
                        )) :
                        null
                }
            </span>
        </div>
    );
}

export default Image;