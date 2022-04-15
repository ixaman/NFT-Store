import {
    faFacebook, faInstagram, faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const facebook = <FontAwesomeIcon icon={faFacebook} />
const instagram = <FontAwesomeIcon icon={faInstagram} />
const twitter = <FontAwesomeIcon icon={faTwitter} />
const youtube = <FontAwesomeIcon icon={faYoutube} />

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <nav className="footer-nav">
                        <ul className="logo-con">
                            <div className="f-title logo-f">
                                <img src="../../img/logo_white.svg" alt="Logo" />
                                <p>Finec</p>
                            </div>
                            <p>
                            The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                            </p>
                        </ul>
                        <ul>
                            <h6 className='f-title'>About Us</h6>
                            <li className="nav-item">
                                <a href="#">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Items</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Follow Us</a>
                            </li>
                        </ul>
                        <ul>
                            <h6 className='f-title'>Settings</h6>
                            <li className="nav-item">
                                <a href="#">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Agreements</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Activity</a>
                            </li>
                        </ul>
                        <ul>
                            <h6 className='f-title'>Legal</h6>
                            <li className="nav-item">
                                <a href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Agreements</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Policy</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Find More</a>
                            </li>
                        </ul>
                        <ul>
                            <h6 className='f-title'>Platforms</h6>
                            <li className="nav-item">
                                <a href="#">Instagram</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Twitter</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Facebook</a>
                            </li>
                            <li className="nav-item">
                                <a href="#">Youtube</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer-rights">
                        <p>Copyright © 2022 <span>Finec</span>. All rights reserved.</p>
                        <div className="icons">
                            <a href="#">
                                {facebook}
                            </a>
                            <a href="#">
                                {instagram}
                            </a>
                            <a href="#">
                                {twitter}
                            </a>
                            <a href="#">
                                {youtube}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;