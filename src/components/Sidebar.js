import { BrowserRouter, Link } from 'react-router-dom'
import { FcSearch } from "react-icons/fc";
import {  AiOutlineHome } from 'react-icons/ai';

function Sidebar () {


    return (
        <div>
            <ul className="icons-container">
                <li className="icon-home-container">
                    <Link to="/Home" className="icon-home-container">
                        <AiOutlineHome size="30px" className="icon-home"/>
                        <p>HOME</p>
                    </Link>
                </li>
            
            </ul>

        </div>

    )
}

export default Sidebar;