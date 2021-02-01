import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi';
import { RiPlayListFill } from 'react-icons/ri';
import {  AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import Home from './home/home'

function Sidebar (props) {
    

    return (
        <div className="side-bar">
            <ul className="icons-container">
                <li className="icon-home-container" >
                    <Link to="/home" className="icon-container" onClick={() => props.homeRender}>
                        <AiOutlineHome size="30px" className="icons icon-home" />
                        <p>HOME</p>
                    </Link>
                </li>
                <li className="icon-search-container">
                    <Link to="/search" className="icon-container" onClick={() => props.setSearchBar(true)}>
                        <BiSearch size="30px" className="icons icon-search" />
                        <p className="icon-search-text">SEARCH</p>
                    </Link>
                </li>
                <li>
                    <Link to="/playlists" className="icon-container">
                        <RiPlayListFill size="30px" className="icons icon-playlist"/>
                        <p>PLAYLISTS</p>
                    </Link>
                </li>
            </ul>

            <div className="sidebar-border">
                
            </div>

            <h2 className="about-us">About Us:</h2>
            <ul className="social-media-icons-container">
                <li className="github-icon-container">
                    <a href="https://github.com/talentedasian/spotify-clone-jos-front.git" target="_blank" rel="noreferrer">
                        <AiFillGithub className="icon-github" size="50px" className="github-icon"/>
                        <p>Code is on Github</p>
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default Sidebar;