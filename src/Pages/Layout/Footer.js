import React from 'react';
import FooterCol from './FooterCol';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlus, faInstagram, faLinkedinIn, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    const special = [
        { name: "Feature Products", link: "/feature-products" },
        { name: "Latest Products", link: "/latest-products" },
        { name: "Best Selling Products", link: "/best-selling-products" },
        { name: "Top Rated Products", link: "/top-rated-products" },
        { name: "All Brands", link: "/all-brands" },
        { name: "All Category", link: "/all-category" },

    ]
    const shippingInfo = [
        { name: "Profile Info", link: "/profile-info" },
        { name: "Wish List", link: "/wish-list" },
        { name: "Track Order", link: "/track-order" },
        { name: "Address", link: "/address" },
        { name: "Support Ticket", link: "/support-ticket" },
    ]
    const aboutUs = [
        { name: "About Company", link: "/about-company" },
        { name: "FAQ", link: "/faq" },
        { name: "Terms And Conditions", link: "/terms-and-conditions" },
        { name: "Contact Us", link: "/contact-us" },
    ]

    const socialIcon = [
        { icon: faTwitter, link: "/twitter" },
        { icon: faLinkedinIn, link: "/linkdin" },
        { icon: faGooglePlus, link: "/google-plus" },
        { icon: faPinterest, link: "/pinterst" },
        { icon: faInstagram, link: "/instagram" },
        { icon: faFacebookF, link: "/facebook" },
    ];

    return (
        <footer className="footer-area clear-both">
            <div className="container mt-3">
                <div className="row py-3">
                    <div className="col-md-3">
                        <div>
                            <img src={logo} className="img-fluid" alt="" />
                        </div>
                        <ul className="social-media list-inline mt-3">
                            <li className="list-inline-item">
                                {
                                    socialIcon.map((data, index) => <Link to={data.link}>
                                        <FontAwesomeIcon className="icon" icon={data.icon} />
                                    </Link>)
                                }
                            </li>
                        </ul>
                        <div>
                            <h5>Download Our App</h5>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <img src="https://ecom2.sariit.com/storage/app/public/png/apple_app.png" className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <img src="https://ecom2.sariit.com/storage/app/public/png/google_app.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <FooterCol key={1} menuTitle={"SPECIAL"} menuItems={special}></FooterCol>
                    <FooterCol key={2} menuTitle={'ACCOUNT & SHIPPING INFO'} menuItems={shippingInfo}></FooterCol>
                    <FooterCol key={3} menuTitle={"ABOUT US"} menuItems={aboutUs}></FooterCol>
                    <div className="copyRight text-center">
                        <p>&copy; Copyright {(new Date()).getFullYear()} All rights reserved by
                            <a className="text-light" href="https://riyaz-khan-shuvo.netlify.app/" target="_blank"> @Riyaz-Hossain</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;