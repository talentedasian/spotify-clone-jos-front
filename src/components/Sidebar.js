import { BrowserRouter, Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { FaHome } from 'react-icons/fa';

function Sidebar () {


    return (
        <div className="sidebar">
            <BrowserRouter>
            <div className="icons-container">
                <div className="home-icon-container">
                    <Link to="/home" className="home-icon-link">
                        <FaHome size="35" className="home-icon"/> 
                        <span>Home</span>
                    </Link>
                </div>
                <div className="search-icon-container">
                    <Link to="/search" className="search-icon-link">
                        <FcSearch size="35" className="search-icon"/>
                        <span>Search</span>
                    </Link>
                </div>
            </div>
            </BrowserRouter>
        </div>

    )
}

export default Sidebar;