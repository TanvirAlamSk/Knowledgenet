import React from 'react';
import "./Comments.css"
import { FaBeer, MdComment } from 'react-icons/md';

import commentimg1 from "../../assets/img/testimonial-1.jpg"
import commentimg2 from "../../assets/img/testimonial-2.jpg"
import commentimg3 from "../../assets/img/testimonial-3.jpg"
import commentimg4 from "../../assets/img/testimonial-4.jpg"

const Comments = () => {
    return (
        <div class="containerr mt-16 mb-36 ">
            <h1 className='text-center text-4xl font-bold text-orange-500'>What People Say</h1>
            <p className='text-center my-5 font-medium'>How real people said about KnowledgeNet Online Education.</p>
            <div className="pic-ctn ">
                <div className='card-img  w-32 md:w-60  h-88 md:h-80 flex flex-col justify-center'>
                    <img className='w-20 h-20 rounded-full' src={commentimg1} alt=""
                        class="pic" />
                    <MdComment>
                    </MdComment>
                    <p>“ You don't need a whole ecommerce system to sell your online courses. Paypal, Stripe payment methods integration can help you sell your courses out of the box. In the case you wanna use WooCommerce, this awesome WordPress LMS Plugin will serve you well too. ”</p>
                </div>
                <div className='card-img  w-32 md:w-60  h-88 md:h-80  flex flex-col  justify-center'>
                    <img className='w-20 h-20 rounded-full' src={commentimg2} alt="" class="pic" />
                    <MdComment></MdComment>
                    <p>“ LearnPress is a WordPress complete solution for creating a Learning Management System (LMS). It can help me to create courses, lessons and quizzes and manage them as easy as I want. I've learned a lot, and I highly recommend it. Thank you. ”</p>
                </div>
                <div className='card-img  w-32 md:w-60  h-88 md:h-80   flex flex-col justify-center'>
                    <img className='w-20 h-20 rounded-full' src={commentimg3} alt="" class="pic" />
                    <MdComment></MdComment>
                    <p>
                        "Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris itae erat "</p>
                </div>
                <div className='card-img  w-32 md:w-60  h-88 md:h-80   flex flex-col justify-center'>
                    <img className='w-20 h-20 rounded-full' src={commentimg4} alt="" class="pic" />
                    <MdComment></MdComment>
                    <p>“ Education WP Theme is a comprehensive LMS solution for WordPress Theme. This beautiful theme based on LearnPress - the best WordPress LMS plugin. Education WP theme will bring you the best LMS experience ever with super friendly UX and complete eLearning features. ”</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;