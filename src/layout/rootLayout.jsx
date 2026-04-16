import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/navbar';
import Footer from '../components/shared/footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


            <ToastContainer />
        </div>
    );
}

export default RootLayout;
