import React from 'react';
import { Link } from 'react-router';


const NotFoundPage = () => {


  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <h1 className='text-3xl font-bold'>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/">
      <button className='btn bg-[#244d3f] text-white mt-3'>Go Back Home</button>
      </Link>
    </div>
    );
}


export default NotFoundPage;
