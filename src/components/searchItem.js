import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from 'react-icons/bs'


function SearchItem ( props ) {

    const itemUrl = "http://localhost:8080/api/search/item?item=";

    const [item,setItem] = useState();

    const [isOverflown,setIsOverflown] = useState(false);
    const itemContentOverflown = useRef(null);

     const search = (param) => {
        fetch(itemUrl + param)
        .then(res => res.json())
        .then(data => {
                if (data.Status === "400") {
                    console.log("400 Request Parameters Invalid");
                    setIsOverflown(false);
                }

                setItem(data);
                console.log(data);
            })
        .catch(err => console.log(err));

        if (itemContentOverflown.current.scrollWidth > itemContentOverflown.current.clientWidth ) {
            setIsOverflown(true);
            console.log(isOverflown);
        }
     }



    return (
        <div className="search-item">
            <div className="search-bar-container">
                {   props.searchBar 
                        && 
                    <input className="search-bar" placeholder="Search" type="text" onKeyPress={e => search(e.target.value)}/>
                }
            </div>
                <ul ref={itemContentOverflown} className="items-container"> 
                    
                    {item?.Artists?.map((artists,key) => {
                       return  <li className="items-artist" key={key}>
                            <Link to={`/artists/${artists.id}`} className="items-artist-link" >
                                <img src={artists.images[0]?.url} className="items-artist-image"/>
                                <p className="item-names">{artists.name}</p>
                                <p className="item-types">{artists.type}</p>
                                </Link>
                        </li>
                    })
                    }
                    <div className="overflown-artist-icon-right-container">
                    {   isOverflown
                        &&
                        <BsBoxArrowInRight className="overflow-artist-icon-right" size="40px" />
                    }
                </div>
                </ul>
                
                
                
        </div>


    )

}


export default SearchItem;