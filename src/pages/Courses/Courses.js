import React, { useEffect, useState } from 'react';
import PopularCourseCard from '../../component/PopularCourse/PopularCourseCard/PopularCourseCard';

const Courses = () => {
    const [courses, setCourse] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then((responce) => responce.json())
            .then((data) => setCourse(data))
    }, [])
    return (
        <div className='mt-16 mx-20'>
            <h3 className='text-3xl font-bold'>All Course</h3>
            <p className='mb-10 mt-3'>Limitless learning, more possibilities</p>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    courses.map((course, i) => <PopularCourseCard key={i} course={course}></PopularCourseCard>)
                }
            </div>

        </div>
    );
};

export default Courses;