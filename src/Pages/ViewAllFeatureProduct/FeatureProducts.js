import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureProductsCollection from '../../FakeData/FeatureProducts';

const FeatureProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.productsArray));
    }, [])

    console.log(products)
    return (
        <div className="mt-3">
            <div className="feature-heading">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>Feature Products</h3>
                    </div>
                    <div className="d-flex">
                        <div>
                            <label for="exampleDataList" class="form-label mt-2 me-2">Sort By </label>
                        </div>
                        <div>
                            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="-----Select-----" />
                            <datalist id="datalistOptions">
                                <option value="San Francisco" />
                                <option value="New York" />
                                <option value="Seattle" />
                                <option value="Los Angeles" />
                                <option value="Chicago" />
                            </datalist>
                            {/* <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-3">

                    {/* search by price area start */}

                    <div className="mb-5">
                        <div className="search-by-price">
                            <h5 className="text-start">Price </h5>
                            <hr />
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="0" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">$</span>
                            </div>
                            <p>To</p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="100" aria-label="100" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">$</span>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* search by price area ends */}

                    {/* search by brand area start */}

                    <div className="mb-5">
                        <div className="search-by-price">
                            <h5 className="text-start">Brands </h5>
                            <hr />
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search Brands" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"> <i className="fas fa-search"></i> </span>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* search by brands area ends */}

                    {/* search by category area start */}

                    <div className="mb-5">
                        <div className="search-by-price">
                            <h5 className="text-start">Categories </h5>
                            <hr />
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Search Brands" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"> <i className="fas fa-search"></i> </span>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </div>

                    {/* search by category area ends */}

                </div>
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map((data, index) => <div className="col-md-4  mt-3">
                                <div class="card" style={{ width: "100%" }}>  <Link style={{ textDecoration: "none", color: "black" }} to={`/product-details/${data.key}`} >

                                    <img src={data.img} class="card-img-top" alt="..." />
                                    <hr />
                                    <div class="card-body text-start">
                                        <h3> {data.category} </h3>
                                        <h5 className="l-sp-3"> {data.name.slice(0, 55)} </h5>
                                        <h5 className="text-info">$ {data.price} </h5>
                                    </div>
                                </Link>
                                    <div className="button text-start pb-3 px-3">
                                        <button className="add-to-cart"> Add To Cart <i className="fas fa-shopping-cart"></i> </button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureProducts;