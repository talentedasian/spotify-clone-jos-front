import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from 'react-icons/bs'
import Home from '../home/home'
import Artist from '../artist/artist'
import './item.css'


function SearchItem ( props ) {

    const itemUrl = "http://localhost:8080/api/search/item?item=";

    const [item,setItem] = useState();
    const [isItem,setIsItem] = useState(false);
    const [parameters,setParameters] = useState('');
    
    const [id,setId] = useState('');

    const [isOverflown,setIsOverflown] = useState(false);
    const itemContentOverflown = useRef(null);


     useEffect(() => {
        fetch(itemUrl + parameters)
        .then(res => res.json())
        .then(data => {
                if (data.Status === "400") {
                    console.log("400 Request Parameters Invalid");
                    setIsOverflown(false);
                } else if (itemContentOverflown.current.scrollWidth > itemContentOverflown.current.clientWidth ) {
                    setIsOverflown(true);
                    console.log(isOverflown);
                }

                setItem(data);
                setIsItem(true);
                console.log(data);
            })
        .catch(err => console.log(err));
     }, [parameters])

     const setIdId = (id) => {
         setId(id);
         setIsItem(false);
     }



    return (
        <div className="search-item">
            <div className="search-bar-container">
                {   props.searchBar 
                        && 
                    <input className="search-bar" placeholder="Search" type="text" onKeyPress={e => setParameters(e.target.value)}/>
                }
            </div>
                <ul ref={itemContentOverflown} className="items-container"> 
                    
                    {   isItem && 

                        item?.Artists?.map((artists,key) => {
                       return  <li className="items-artist" key={key}>
                            <Link to={`/artists/${artists.id}`} className="items-artist-link" onClick={() => setIdId(artists.id)}>
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
                <Artist id={id}/>
                <Home />
        </div>


    )

}


export default SearchItem;