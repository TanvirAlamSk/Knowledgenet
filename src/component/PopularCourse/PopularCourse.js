import React, { useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard/PopularCourseCard';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const PopularCourse = () => {
    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch("https://knowledgenet-serverside.vercel.app/courses")
            .then((responce) => responce.json())
            .then((data) => setCourse(data))
    }, [])

    return (
        <div className='mt-16 mx-20'>
            <h3 className='text-3xl font-bold'>Popular Course</h3>
            <p className='mb-10 mt-3'>Limitless learning, more possibilities</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    courses.map((course, i) => i % 2 == 0 && <PopularCourseCard key={i} course={course}></PopularCourseCard>)
                }
            </div>
            <div className='my-10 flex justify-center'>
                <Link to="/course">
                    <button className="btn btn-warning hover:bg-yellow-500 font-bold">See All Course</button>
                </Link>
            </div>
        </div>
    );
};


export default PopularCourse;