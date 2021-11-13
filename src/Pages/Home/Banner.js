import React, { useState } from 'react';
import bannerOne from '../../images/banner/banner-1.jpg'
import bannerTwo from '../../images/banner/banner-2.jpg'
import bannerThree from '../../images/banner/banner-3.jpg'
import Rating from 'react-rating';

const Banner = () => {

    const bestProductsData = [
        { name: "Mobile", rating: 4, img: "https://ecom2.sariit.com/storage/app/public/product/thumbnail/2021-07-18-60f3ffaac5321.png", price: "1500" },
        { name: "Mobile", rating: 3, img: "https://ecom2.sariit.com/storage/app/public/product/thumbnail/2021-07-18-60f3ffaac5321.png", price: "1500" },
        { name: "Mobile", rating: 5, img: "https://ecom2.sariit.com/storage/app/public/product/thumbnail/2021-07-18-60f3ffaac5321.png", price: "1500" },
    ];

    const bannerData = [
        { img: "https://i.postimg.cc/WbY6k1Wp/12.png", name: "Car" },
        { img: "https://i.postimg.cc/44FXzCC1/4.png", name: "Clothes" },
        { img: "https://i.postimg.cc/brM88n05/5.png", name: "Pure Water" },
    ];

    const [singleImage, setSingleImage] = useState([]);

    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={bannerOne} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={bannerTwo} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={bannerThree} class="d-block w-100 img-fluid" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="row">
                        {
                            bannerData.map((data, index) => <div className="col-md-4">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    style={{ background: "none", border: "none" }}
                                    onClick={() => setSingleImage([data.img, data.name])}
                                >
                                    <img title={data.name} className="img-fluid" src={data.img} alt="" />
                                </button>
                            </div>)
                        }
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel"> {singleImage[1]} </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img className="img-fluid" src={singleImage[0]} alt="" />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-primary">Explore More </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="best-products">
                        {
                            bestProductsData.map((data, index) => <div key={index}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div style={{ width: "155px" }} >
                                        <img src={data.img} className="img-fluid" alt="" />
                                    </div>
                                    <div>
                                        <Rating
                                            initialRating={data.rating}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly
                                            style={{ fontSize: "15px", }}
                                        />
                                        <h5 className="text-info text-left">$ {data.price} </h5>
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

export default Banner;