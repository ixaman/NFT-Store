import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Popular from '../Popular/Popular';
import Store from '../Store/Store';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Store></Store>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    );
};

export default Home;