import React from 'react';

const Popular = () => {
    return (
        <>
            <div className="section-popular">
                <div className="section-content">
                    <div className="title">
                        <h2>Popular Collection</h2>
                    </div>
                    <div className="popular-content">
                        <div className="popular-item">
                            <img src="../../img/nft2.jpg" alt="" />
                            <div className="popular-text">
                                <h6>Fruit Combination</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className='secondary-btn'>
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="popular-item">
                            <img src="../../img/nft3.jpg" alt="" />
                            <div className="popular-text">
                                <h6>Melon Juice</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className='secondary-btn'>
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="popular-item">
                            <img src="../../img/nft4.jpg" alt="" />
                            <div className="popular-text">
                                <h6>Fruit Face</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className='secondary-btn'>
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="popular-item">
                            <img src="../../img/nft1.jpg" alt="" />
                            <div className="popular-text">
                                <h6>Fine Graffitie</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="#" className='secondary-btn'>
                                    Learn More <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default Popular;