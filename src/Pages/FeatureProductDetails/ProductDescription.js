import React from 'react';
import Rating from 'react-rating';

const ProductDescription = props => {

    const { category, name, star, img, price, features, stock, seller } = props.product;

    console.log(features)

    return (
        <div>
            <div className="d-flex text-start">
                <div className="">
                    <div className="me-5">
                        <img src={img} className="img-fluid w-100" alt="" />
                    </div>
                </div>
                <div className="">
                    <div>
                        <h5 className="l-sp-3 text-blue"> {name} </h5>
                        <p>
                            by : {seller}
                        </p>
                        <div className="d-flex">
                            <div>
                                <p>$ {price}</p>
                                <p> only {stock} left in stock - order soon</p>
                            </div>
                            <div className="ms-3">
                                <Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"
                                    readonly
                                    style={{ fontSize: "15px", color: "#F0C14B" }}
                                />
                                <h6> Features </h6>
                                {
                                    features ? features.map((data, index) => <div>
                                        <li> {data.description} : {data.value} </li>
                                    </div>) : null
                                }
                            </div>
                        </div>
                    </div>
                    <div className="button text-start">
                        <button className="add-to-cart"> Add To Cart <i className="fas fa-shopping-cart"></i> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;