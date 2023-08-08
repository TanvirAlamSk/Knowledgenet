import React from 'react';
import "./OfferSection.css"
import Form from '../../pages/Signup/Form';
import { FaCheck } from 'react-icons/fa';

const OfferSection = () => {
    return (
        <div className='offer-bg flex flex-col md:flex-row justify-between items-center py-20'>
            <div className='w-3/4 md:w-2/4 pl-10'>
                <h3 className='text-orange-500 text-2xl'>NEED ANY COURSES</h3>
                <h3 className='text-3xl text-white font-bold'>30% Off For New Students</h3>
                <p className='text-lg my-5 text-white'>We have an exceptional special offer on our courses for new with our partner school in Dhaka, Bangladesh, 30% discount on intensive classes and 15% on standard one!!

                    The school has  modern campuses in Dhaka that will suit all types of students.</p>
                <ul className='text-white font-medium'>
                    <li className='flex items-center'><FaCheck className='text-orange-500 mr-2'></FaCheck>GAMA Study are completely FREE!</li>
                    <li className='flex items-center'><FaCheck className='text-orange-500 mr-2'></FaCheck> 20 lessons per week.</li>
                    <li className='flex items-center'><FaCheck className='text-orange-500 mr-2'></FaCheck>Several timetables are available.</li>


                </ul>


            </div>
            <div className='bg-base-100 w-3/4 md:w-1/3 rounded-md  m-6 mr-10'>
                <h3 className='text-orange-500 text-2xl font-semibold px-5 py-12 text-center'>Create your free account now and immediately get access to 100s of online courses.</h3>
                <div className='bg-orange-500 rounded p-12'>
                    <Form></Form>
                </div>


            </div>

        </div>
    );
};

export default OfferSection;