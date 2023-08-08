import React from 'react';
import "./LeatestNews.css"
import img1 from "../../assets/img/cat-1.jpg"
import img2 from "../../assets/img/cat-2.jpg"
import img3 from "../../assets/img/cat-3.jpg"
import img4 from "../../assets/img/cat-4.jpg"
import img5 from "../../assets/img/cat-5.jpg"
import img6 from "../../assets/img/cat-6.jpg"
import img7 from "../../assets/img/cat-7.jpg"
import img8 from "../../assets/img/cat-8.jpg"
import LatestNewsCard from './LatestNewsCard/LatestNewsCard';

const newsCarts = [
    {
        id: 1,
        img: img1,
        title: "Admin earns scholarship"

    },
    {
        id: 2,
        img: img2,
        title: "Becoming a better designer"

    },
    {
        id: 3,
        img: img3,
        title: "EducationWP"

    },
    {
        id: 4,
        img: img4,
        title: "Forensic team earns several"

    },
    {
        id: 5,
        img: img5,
        title: "Introducing: Dr. Deniz Zeynep"

    },
    {
        id: 6,
        img: img6,
        title: "Brightcove teams up with Pubmatic"

    },
    {
        id: 7,
        img: img7,
        title: "JetBrains adds iOS support"

    },
    {
        id: 8,
        img: img8,
        title: "Deno unveils faster,simpler API"

    }
    // lg: m - 20 carousel-end
]
const LatestNews = () => {
    return (
        <div className=' latest-news lg:my-20'>
            <h2 className='text-yellow-400 text-4xl font-semibold p-10 pb-0 lg:ml-10'>Latest News</h2>
            <p className='text-white text-xl font-semibold ml-10 lg:ml-20 p-0'>Education news all over the world.</p>
            <div className=" carousel carousel rounded-box  gap-8 p-10  w-full">

                {newsCarts.map((cart) => <LatestNewsCard key={cart.id} cart={cart}></LatestNewsCard>)}
            </div>

        </div>
    );
};

export default LatestNews;