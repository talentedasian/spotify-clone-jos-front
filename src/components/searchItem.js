import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function SearchItem ( props ) {

    const itemUrl = "http://localhost:8080/api/search/item?item=";

    const [item,setItem] = useState();

     const search = (param) => {
        fetch(itemUrl + param)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        console.log(item)});
     }

     

    return (
        <div className="search-item">
            <div className="search-bar-container">
                {   props.searchBar 
                        && 
                    <input className="search-bar" placeholder="Search" type="text" onKeyPress={e => search(e.target.value)}/>
                }
            </div>
                <div className="items-container">
                        {item?.Artists?.map((artists,key) => {
                            return <li className="items-artist" key={key}>
                                <Link to={`/artist/${artists.name}`} className="items-artist-link">
                                    <img src={artists.images[0]?.url} className="items-artist-image"/>
                                </Link>
                            </li>
                        })}
                </div>
        </div>


    )

}


export default SearchItem;