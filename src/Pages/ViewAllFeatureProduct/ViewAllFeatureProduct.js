import React from 'react';
import './ViewAllFeatureProduct.css'
import Layout from '../Layout/Layout';
import FeatureProducts from './FeatureProducts';

const ViewAllFeatureProduct = () => {
    return (
        <div>
            <Layout>
                <div className="container">
                    <FeatureProducts />
                </div>
            </Layout>
        </div>
    );
};

export default ViewAllFeatureProduct;