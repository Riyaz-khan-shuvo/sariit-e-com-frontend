import React from 'react';
import './Home.css'
import Layout from '../Layout/Layout';
import Banner from './Banner';
import FeatureProducts from './FeatureProducts';

const Home = () => {
    return (
        <div>
            <Layout>
                <div className="container my-3">
                    <Banner />
                    <FeatureProducts />
                </div>
            </Layout>
        </div>
    );
};

export default Home;