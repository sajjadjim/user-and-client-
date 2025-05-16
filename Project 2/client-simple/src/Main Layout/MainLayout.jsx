import React from 'react';
import { Outlet } from 'react-router';
import Headder from '../Components/Headder'

const MainLayout = () => {
    return (
        <div>
            <Headder></Headder>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;