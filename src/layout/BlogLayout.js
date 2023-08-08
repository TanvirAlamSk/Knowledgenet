import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
    return (
        <div div className=''>
            <Header></Header>
            <div className='flex gap-3 text-center lg:m-8'>
                <div className='w-1/6 '>
                    {/* <h1 className='w-full'>Left Side</h1> */}
                </div>
                <div className='w-5/6 '>
                    <Outlet></Outlet></div>
                <div className='w-1/6 '>
                    {/* <h1>Right Side</h1> */}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BlogLayout;