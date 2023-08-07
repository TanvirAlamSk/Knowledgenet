import React from 'react';
// import './HeaderSection.css'
import carosel1 from "../../assets/img/carousel-1.jpg"
import carosel2 from "../../assets/img/carousel-2.jpg"
import carosel3 from "../../assets/img/carousel-3.jpg"
import HeaderSectionItem from './HeaderSectionItem/HeaderSectionItem';
const HeaderSection = () => {
    const images = [carosel1, carosel2, carosel3]
    return (
        <div className='mx-8'>
            <div className="carousel w-full">
                {
                    images.map((image, i) => <HeaderSectionItem key={i} i={i} image={image}></HeaderSectionItem>)
                }
            </div>
        </div>
    );
};

export default HeaderSection;