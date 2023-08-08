import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiStudentLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ModalItem = ({ courseDetails }) => {
    const { course_name, image, price, enrole_student, rating, discribtion } = courseDetails

    const notify = () => toast.success("CONGRATULATION! May your future be filled with success", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div  >

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='my-4'>
                        <label className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" htmlFor="my_modal_6">✕</label>
                    </div>
                    <hr></hr>

                    <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
                        <div className="flex flex-col items-center py-8 px-4">
                            {/* Code block starts */}
                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Name
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="name" />
                            </div>
                            <div className="flex flex-col md:mr-16 my-2">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Email
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="email" />
                            </div>
                            <div className="flex flex-col md:mr-16">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Phone No.
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="phone number" />
                            </div>
                            <div className="flex flex-col md:mr-16 my-2">
                                <label htmlFor="email" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                                    Transection Id
                                </label>
                                <input id="email" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="transection id" />
                            </div>
                            <div className="modal-action">
                                <label onClick={notify} htmlFor="my_modal_6" className="btn btn-success">Conform!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalItem;