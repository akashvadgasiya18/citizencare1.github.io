import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
// import Dots from "./Dots";
// import Arrows from "./Arrows";
import { ImageSlider } from "./ImageSlider";
import "../HomeMain/ImageSlider.css";

const len = ImageSlider.length - 1;

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="slider-container">
            <SliderContent activeIndex={activeIndex} sliderImage={ImageSlider} />
            {/* <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            /> */}
            {/* <Dots
                activeIndex={activeIndex}
                ImageSlider={ImageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            /> */}
        </div>
    );
}

export default Slider;