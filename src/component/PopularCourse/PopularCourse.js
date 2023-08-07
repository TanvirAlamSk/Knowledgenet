import React, { useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard/PopularCourseCard';

const PopularCourse = () => {
    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/courses")
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
                <button className="btn btn-warning hover:bg-yellow-500 font-bold">See All Course</button>
            </div>
        </div>
    );
};


export default PopularCourse;