import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const navItems = [
        { name: "Home", link: "/home" },
        { name: "Brand", link: "/brand" },
        {
            dropdown: "Seller Zone", dropdownItems: [
                { name: "Become A Seller", link: "/become-seller" },
                { name: "Seller Login", link: "/seller-login" },

            ]
        },

    ];

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://ecom2.sariit.com/storage/app/public/company/2021-06-27-60d81ff4a51c4.png" alt="" width="auto" height="45" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                navItems.map((data, index) => data.dropdown ? <li key={index} className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {data.dropdown}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {
                                            data.dropdownItems.map((data, index) => <li key={index}><Link to={data.link} className="dropdown-item"> {data.name} </Link></li>)
                                        }
                                    </ul>
                                </li> : <li key={index} className="nav-item"> <Link to={data.link} className="nav-link">
                                    {data.name}
                                </Link></li>)
                            }
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;