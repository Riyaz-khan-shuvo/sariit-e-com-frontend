import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const FeatureProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.productsArray));
    }, [])

    const allProducts = products;
    console.log(allProducts)

    return (
        <div className="mt-3">
            <div className="feature-heading">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>Feature Products</h3>
                    </div>
                    <div>
                        <Link to="/all-feature-product" className="link" > View All  <i className="fas fa-angle-right"></i> </Link>
                    </div>
                </div>
                <hr />
            </div>
            <div className="row">
                {
                    allProducts.splice(0 , 4).map((data, index) => <div className="col-md-3  mt-3">
                        
                        <Link style={{ textDecoration: "none", color: "black" }} to={`/product-details/${data.key}`} >
                            <div class="card" style={{ width: "100%" }}>
                                <img src={data.img} class="card-img-top" alt="..." />
                                <hr />
                                <div class="card-body text-start">
                                    <h3> {data.category} </h3>
                                    <h5 className="l-sp-3"> {data.name.slice(0, 75)} </h5>
                                    <h5 className="text-info">$ {data.price} </h5>
                                </div>
                            </div>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeatureProducts;