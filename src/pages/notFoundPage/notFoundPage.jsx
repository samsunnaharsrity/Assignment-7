import React from 'react';
import { Link } from 'react-router';
import notFoundImg from '../../assets/image/not founded.avif'


const NotFoundPage = () => {


  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
      <img className='w-[200px] h-[200px]' src={notFoundImg} alt="notFoundImg" />
      <p>Oops! This page not found.</p>
      <Link to="/">
      <button className='btn bg-[#244d3f] text-white mt-3'>Go Back Home</button>
      </Link>
    </div>
    );
}


export default NotFoundPage;
