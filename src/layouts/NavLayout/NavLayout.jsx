import React from 'react';
import LatestNews from '../../components/NavLayout/LatestNews';
import Navbar from '../../components/NavLayout/Navbar';

const NavLayout = () => {
    return (
        <div>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
        </div>
    );
};

export default NavLayout;