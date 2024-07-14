import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import left_arrow from '../../../assets/images/homepage/left-arrow.png';
import right_arrow from '../../../assets/images/homepage/right-arrow.png';
import left_image from '../../../assets/images/homepage/left-image.png';
import right_image from '../../../assets/images/homepage/right-image.png';
import center_image from '../../../assets/images/homepage/Main-Image.png';

const images = [
    { src: left_image, content: 'Supberb pool overlooking the hills at the park.' },
    { src: center_image, content: 'Vanity pool overlooking the hills at the park.' },
    { src: right_image, content: 'Nice bedroom overlooking the hills at the park.' },
];

const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
        <img src={right_arrow} alt="Next" />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
        <img src={left_arrow} alt="Previous" />
    </div>
);

const ImageSlider = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "90px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <div className="image-container">
                            <img src={image.src} alt={`Slide ${index + 1}`} className="slider-image" />
                            <div className="overlay"></div>
                            <div className="slide-content">
                                <p>{image.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
