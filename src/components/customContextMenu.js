import { useState } from "react";
import './searchItem/item.css'

function CustomContextMenu ( props ) {

    

    

    return (
        <div className="custom-context-menu" >
            
                <ul className="custom-context-menu" style={props.styles}>
                    {props.contentCustomContextMenu}
                </ul>
        </div>

    )
}

export default CustomContextMenu;