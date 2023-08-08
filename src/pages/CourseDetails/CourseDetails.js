import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiStudentLight } from 'react-icons/pi';
import { useLoaderData } from 'react-router-dom';
import ModalItem from '../../component/PopularCourse/PopularCourseCard/ModalItem';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { course_name, image, price, enrole_student, rating, discribtion } = courseDetails;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body mx-32">
                <h2 className="card-title">{course_name}</h2>
                <div className='flex justify-between items-center my-3 text-lg'>
                    <span className='flex justify-between items-center font-semibold'>
                        <FaStar className='text-yellow-400 mr-3'></FaStar> {rating}
                        <span className='ml-4  flex justify-between items-center font-semibold'>
                            <PiStudentLight className='mr-2' /> {enrole_student}
                        </span>
                    </span>
                    <span className='font-bold'>${price}</span>
                </div>
                <p >{discribtion}</p>
                <div className="card-actions justify-start mt-10">
                    <label htmlFor="my_modal_6" className="btn btn-primary px-8">Admission</label>
                    <ModalItem courseDetails={courseDetails}></ModalItem>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;