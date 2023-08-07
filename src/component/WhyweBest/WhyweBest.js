import React from 'react';
import { PiChatsBold, PiGraduationCap } from "react-icons/pi";
import { MdOutlineQuiz } from "react-icons/md";

const WhyweBest = () => {
    return (
        <div className='mx-20 mt-20'>
            <div className=' text-center my-5'>
                <h1 className='text-3xl font-medium'>Why Choose Us?</h1>
                <p >A choice that makes the difference.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure>
                        <PiChatsBold className='w-20 h-20 text-orange-400'></PiChatsBold>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Dedicated Support

                        </h2>
                        <p>In a distance learning environment where teachers and students cannot be in the same location, maintaining as much face-to-face contact as possible is critical for keeping students engaged.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><PiGraduationCap className='w-20 h-20 text-orange-400'></PiGraduationCap></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Highly Experienced

                        </h2>
                        <p>Experienced Teacher: For all highly qualified purposes other than the equity plan requirement--A teacher who has one or more creditable years of teaching experience.</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <MdOutlineQuiz className='w-20 h-20 text-orange-400'></MdOutlineQuiz>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Question, Quiz & Course

                        </h2>
                        <p>Online quizzes are the main tool for testing knowledge in eLearning. What type of quiz is right for your learners? In this article, we’ll look at 14 types, from the obvious multiple-choice quiz to the refreshing drag-and-drop quiz format.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyweBest;