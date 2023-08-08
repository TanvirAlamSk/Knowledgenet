import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiStudentLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
const PopularCourseCard = ({ course }) => {

    const { course_name, image, price, enrole_student, rating, id } = course
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} className='h-64 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold ">{course_name}</h2>
                <hr></hr>
                <div className='flex justify-between items-center my-3 text-lg'>
                    <span className='flex justify-between items-center font-semibold'>
                        <FaStar className='text-yellow-400 mr-3'></FaStar> {rating}
                        <span className='ml-4  flex justify-between items-center font-semibold'>
                            <PiStudentLight className='mr-2' /> {enrole_student}
                        </span>
                    </span>
                    <span className='font-bold'>${price}</span>
                </div>
                <div className="card-actions mt-2 justify-center ">

                    <Link className="btn btn-primary 
                        w-4/5" to={`/course/${id}`}>
                        <label >Buy Now</label>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCourseCard;