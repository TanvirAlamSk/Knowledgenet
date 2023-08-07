import React from 'react';
import HeaderSection from '../../component/HeaderSection/HeaderSection';
import PopularCourse from '../../component/PopularCourse/PopularCourse';
import OfferSection from '../../component/OfferSection/OfferSection';
import WhyweBest from '../../component/WhyweBest/WhyweBest';
import LatestNews from '../../component/LatestNews/LatestNews';
import Comments from '../../component/Comments/Comments';


const Home = () => {
    return (
        <div className='mb-20'>
            <HeaderSection></HeaderSection>
            <PopularCourse></PopularCourse>
            <OfferSection></OfferSection>
            <WhyweBest></WhyweBest>
            <LatestNews></LatestNews>
            <Comments></Comments>
        </div>
    );
};

export default Home;