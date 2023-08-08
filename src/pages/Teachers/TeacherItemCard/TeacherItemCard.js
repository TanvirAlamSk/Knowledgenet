import React from 'react';

const TeacherItemCard = ({ teacher }) => {
    const { picture, firstName, lastName, subject } = teacher
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={picture} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {firstName}" "{lastName}</h2>
                <p>Teach : {subject}</p>
            </div>
        </div>
    );
};

export default TeacherItemCard;