import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[100vh] bg-slate-300'>
            <div className='flex justify-center py-3'><Link className="btn btn-outline" to="/">Home</Link></div>
            <img className='w-full h-full' src={`https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg`} alt="" />
        </div>
    );
};

export default Error;