import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
    return (
        <section id="layout" className=''>
            <Sidebar>
                {children}
            </Sidebar>

        </section>
    );
};

export default Layout;
