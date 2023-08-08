import React from 'react';
import { Link } from 'react-router-dom';

const BlogNewsCard = ({ news }) => {
    const { title, description, pubDate, image_url, } = news
    return (
        <div className="card my-5 card-compact w-full bg-base-100 shadow-xl">
            <figure>
                <img className='w-1/2' src={image_url} />
            </figure>
            {image_url &&
                <div className="card-body text-left">
                    <small>{pubDate}</small>
                    <h2 className="card-title">{title}.</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-start">
                        <Link>
                            <button className="btn btn-warning">View Full News</button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default BlogNewsCard;