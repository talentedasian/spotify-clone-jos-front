import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai'


function SearchItem ( props ) {

    const itemUrl = "http://localhost:8080/api/search/item?item=";

    const [item,setItem] = useState();

     const search = (param) => {
        fetch(itemUrl + param)
        .then(res => res.json())
        .then(data => {
                if (data.Status === "400") {
                    console.log("400 Request Parameters Invalid");
                }

                setItem(data);
                console.log(data);
            })
        .catch(err => console.log(err));
     }

     

    return (
        <div className="search-item">
            <div className="search-bar-container">
                {   props.searchBar 
                        && 
                    <input className="search-bar" placeholder="Search" type="text" onKeyPress={e => search(e.target.value)}/>
                }
            </div>
                <ul className="items-container">
                    <AiOutlineArrowRight />
                        {item?.Artists?.map((artists,key) => {
                            <li className="items-artist" key={key}>
                                <Link to={`/artist/${artists.name}`} className="items-artist-link">
                                    <img src={artists.images[0]?.url} className="items-artist-image"/>
                                    <p>{artists.name}</p>
                                    <p className="item-types">{artists.type}</p>
                                </Link>
                            </li>
                        })}
                </ul>
        </div>


    )

}


export default SearchItem;