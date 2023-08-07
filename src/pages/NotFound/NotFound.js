import React from 'react';
import notfoundimg from "../../assets/notfound/404-drib23.gif"

const NotFound = () => {
    return (
        <div className='flex justify-center items-center mt-5'>
            <img alt='' src={notfoundimg}></img>
        </div>
    );
};

export default NotFound;