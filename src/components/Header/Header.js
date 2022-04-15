import React from 'react';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-content u-pad-lg">
                    <div className="left-header">
                        <h1>
                            Discover, Collect, Buy and Sell <span>NFTs online</span> for free.
                        </h1>
                        <p>
                        Finec is the first release and event calendar for the growing Non-Fungible Token industry. We cover the most interesting events and NFT drops across marketplaces and platforms.
                        </p>
                        <div className="header-btns">
                            <a href="#" className="btn btn-head"> Get Started &nbsp; &rarr;</a>
                            <a href="#" className="btn btn-head">Create</a>
                        </div>
                        <div className="header-intro">
                            <a href="#" className="intro-btn"><span>join the movement</span> <span>sell your goods online! Learn More..</span></a>
                        </div>
                    </div>
                    <div className="right-header">
                        <div className="header-img">
                            <img src="../../img/nft-hero.jpg" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;