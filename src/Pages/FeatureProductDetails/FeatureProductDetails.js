import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Layout from '../Layout/Layout';
import ProductDescription from './ProductDescription';

const FeatureProductDetails = () => {

    const { key } = useParams()

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/products/${key}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Layout>
                <div className="container">
                    <ProductDescription
                        product={products}
                    />
                </div>
            </Layout>
        </div>
    );
};

export default FeatureProductDetails;