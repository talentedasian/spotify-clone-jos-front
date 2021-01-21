import { BrowserRouter, Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import { FaHome } from 'react-icons/fa';

function Sidebar () {


    return (
        <div className="sidebar">
            <BrowserRouter>
            <div className="icons-container">
                <div>
                    <Link to="/search" className="search-icon-link">
                        <FcSearch size="20" className="search-icon"/>
                    </Link>
                </div>
                <div className="home-icon-container">
                    <Link to="/home" className="home-icon-link">
                        <FaHome size="35" className="home-icon"/> 
                        <span className="home-icon-word">Home</span>
                    </Link>
                </div>
            </div>
            </BrowserRouter>
        </div>

    )
}

export default Sidebar;