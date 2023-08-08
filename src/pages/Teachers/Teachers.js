import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeacherItemCard from './TeacherItemCard/TeacherItemCard';

const Teachers = () => {
    const teachers = useLoaderData()
    { }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 mx-10'>
                {
                    teachers.map((teacher) => <TeacherItemCard key={teacher.phonNumde} teacher={teacher}></TeacherItemCard>)
                }
            </div>
        </div>
    );
};

export default Teachers;