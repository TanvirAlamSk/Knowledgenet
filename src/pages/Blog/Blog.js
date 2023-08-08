import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogNewsCard from './BlogNewsCard/BlogNewsCard';

const Blog = () => {
    const newses = useLoaderData()
    return (
        <div>
            <header>

            </header>
            <div>
                {newses.map((news, index) => <BlogNewsCard key={index} news={news}></BlogNewsCard>)}
            </div>
        </div>
    );
};

export default Blog;