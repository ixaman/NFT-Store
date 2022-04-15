import React from 'react';

const Store = () => {
    return (
        <>
            <div className="section-store">
                <div className="section-item">
                    <div className="title">
                        <h2>All Items</h2>
                    </div>
                    <div className="item-content">
                        <div className="item-card">
                            <div className="card-content">
                                <div className="image">
                                    <img src="../../img/nft5.jpg" alt="" />
                                </div>
                                <h4 className='small-title'>
                                    NFT Product-1
                                </h4>
                                <div className="auction">
                                    <p>Auction</p>
                                    <p>Bid: <span>0.43 ETH</span></p>
                                </div>
                                <p className="duration"> 6h 4m 30s <span>0.55 ETH</span></p>
                                <div className="buy-btn">
                                    <a href="" className="btn buy-now">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="item-card">
                            <div className="card-content">
                                <div className="image">
                                    <img src="../../img/nft7.jpg" alt="" />
                                </div>
                                <h4 className='small-title'>
                                    NFT Product-1
                                </h4>
                                <div className="auction">
                                    <p>Auction</p>
                                    <p>Bid: <span>0.43 ETH</span></p>
                                </div>
                                <p className="duration"> 6h 4m 30s <span>0.55 ETH</span></p>
                                <div className="buy-btn">
                                    <a href="" className="btn buy-now">Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="item-card">
                            <div className="card-content">
                                <div className="image">
                                    <img src="../../img/nft8.jpg" alt="" />
                                </div>
                                <h4 className='small-title'>
                                    NFT Product-1
                                </h4>
                                <div className="auction">
                                    <p>Auction</p>
                                    <p>Bid: <span>0.43 ETH</span></p>
                                </div>
                                <p className="duration"> 6h 4m 30s <span>0.55 ETH</span></p>
                                <div className="buy-btn">
                                    <a href="" className="btn buy-now">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Store;