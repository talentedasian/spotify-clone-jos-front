import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
import { RiPlayListFill } from 'react-icons/ri';
import {  AiOutlineHome } from 'react-icons/ai';

function Sidebar () {


    return (
        <div className="side-bar">
            <ul className="icons-container">
                <li className="icon-home-container">
                    <Link to="/home" className="icon-container">
                        <AiOutlineHome size="30px" className="icons icon-home"/>
                        <p>HOME</p>
                    </Link>
                </li>
                <li className="icon-search-container">
                    <Link to="/search" className="icon-container">
                        <BiSearch size="30px" className="icons icon-search" />
                        <p className="icon-search-text">SEARCH</p>
                    </Link>
                </li>
                <li>
                    <Link to="/playlists" className="icon-container">
                        <RiPlayListFill size="30px" className="icons icon-playlist" />
                        <p>PLAYLISTS</p>
                    </Link>
                </li>
            </ul>

            <div className="sidebar-border">
                
            </div>


        </div>

    )
}

export default Sidebar;