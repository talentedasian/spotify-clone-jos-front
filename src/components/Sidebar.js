import { BrowserRouter, Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
import { RiPlayListFill } from 'react-icons/ri';
import {  AiOutlineHome } from 'react-icons/ai';

function Sidebar () {


    return (
        <div>
            <ul className="icons-container">
                <li className="icon-home-container">
                    <Link to="/Home" className="icon-container">
                        <AiOutlineHome size="30px" className="icons icon-home"/>
                        <p>HOME</p>
                    </Link>
                </li>
                <li className="icon-search-container">
                    <Link to="/Search" className="icon-container">
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

        </div>

    )
}

export default Sidebar;