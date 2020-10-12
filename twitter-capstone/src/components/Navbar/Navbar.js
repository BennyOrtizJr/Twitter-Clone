import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <Link className="links" to="/">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/home-page.png" alt=""/>
                <span className="span-links">Home</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/hashtag-large.png" alt=""/>
                <span className="span-links">Explore</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/appointment-reminders.png" alt=""/>
                <span className="span-links">Notifications</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/messaging-.png" alt=""/>
                <span className="span-links">Messages</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/bookmark-ribbon.png" alt=""/>
                <span className="span-links">Bookmarks</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/list.png" alt=""/>
                <span className="span-links">Lists</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/gender-neutral-user.png" alt=""/>
                <span className="span-links">Profile</span>
            </Link>
            <Link className="links" to="/Explore">
                <img className="icon-images" src="https://img.icons8.com/color/32/000000/more.png" alt=""/>
                <span className="span-links">More</span>
            </Link>
        </nav>
    )
}

export default Navbar;