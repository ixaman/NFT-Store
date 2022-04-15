import React from 'react';

const Navigation = () => {
    return (
        <div>
            <nav className='navigation u-pad-lg'>
                    <div className="logo">
                        <img src="../../img/logo.svg" alt="" srcset="" />
                        <h6>Finec</h6>
                    </div>
                    <div className="nav-items">
                        <li className="nav-item">
                            <a href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/myorder">My Orders</a>
                        </li>
                        <li className="nav-item">
                            <a href="/manageorder">Manage Orders</a>
                        </li>
                        <li className="nav-item">
                            <a href="/addnew">Add new</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact">Contact</a>
                        </li>
                    </div>
                    <div className="btn-con">
                        <a href="" className='btn nav-btn'>Sign Up</a>
                    </div>
                </nav>
        </div>
    );
};

export default Navigation;