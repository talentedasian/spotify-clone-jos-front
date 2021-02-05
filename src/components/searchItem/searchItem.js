import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from 'react-icons/bs'
import Home from '../home/home'
import Artist from '../artist/artist'
import './item.css'
import CustomContextMenu from '/home/almir/frontend projects/spotify-front/src/components/customContextMenu.js';

function SearchItem ( props ) {

    const itemUrl = "http://localhost:8080/api/search/item?item=";

    const [item,setItem] = useState();
    const [isItem,setIsItem] = useState(false);
    const [parameters,setParameters] = useState('');
    
    const [id,setId] = useState('');
    const [isArtist,setIsArtist] = useState(false);

    const [isSeeAll, setIsSeeAll] = useState(false);

    const [isOverflown,setIsOverflown] = useState(false);
    const itemContentOverflown = useRef(null);

    function seeAll () {
        return (
            <Link to="/artists/all">
                                        <h1>See All</h1>
                                    </Link>
        )
    }

    const fetchAPI = (params) => {
        fetch(itemUrl + params)
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
                setIsSeeAll(false);
                console.log(data);
                setParameters(params)
            })
        .catch(err => console.log(err))
    }
    
    const fetchAPIAll = () => {
        fetch("http://localhost:8080/api/search/item-artist?name=" + parameters)
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
                setIsItem(false);
                setIsSeeAll(true);
                console.log(data);
            })
    }

     const setArtistId = (id) => {
         setId(id)
         setIsItem(false);
         setIsArtist(true);
     }

     const [contextMenuAttributes,setContextMenuAttributes] = useState({
        positionX: 0,
        positionY: 0,
        visible: false
    });

    const menu = ["menu","gg"]; 

    return (
        <div className="search-item" onClick={e => setContextMenuAttributes({visible: false})}>
            <div className="search-bar-container">
                {   props.searchBar 
                        && 
                    <input className="search-bar" placeholder="Search" type="text" onKeyPress={e => fetchAPI(e.target.value)}/>
                }
            </div>
            <div>
                {isItem && 
                    <Link to="/artists/all" style={{
                        textDecoration: "none"
                    }}>
                        <h3 style={{
                            textAlign: "end",
                            marginRight: "200px",
                            color: "white"
                        }} onClick={e => fetchAPIAll(e.target.value)}>SEE ALL</h3>
                    </Link>
                }
                {   isItem
                        &&
                    <ul ref={itemContentOverflown} className="items-artist-container"> 
                        {item?.Artists?.slice(0,6).map((artists,key) => {
                            return  <li className="items-artists" key={key}>
                                <Link to={`/artists/${artists.id}`} className="items-artist-link items-link"
                                        onContextMenu={e => {
                                            setContextMenuAttributes({
                                            positionX: e.pageX + "px",
                                            positionY: e.pageY + "px",
                                            visible: true
                                        });
                                            e.preventDefault();
                                        }} 
                                    onClick={(e) => setArtistId(e,artists.id)}>
                                    <div className="items-artist-image" style={{
                                        backgroundImage: `url(${artists.images[0]?.url})`
                                    }} />
                                    <p className="item-names">{artists.name}</p>
                                    <p className="item-types">{artists.type}</p>
                                </Link>
                            </li>
                        })}
                    <div className="overflown-artist-icon-right-container">
                    {   isOverflown
                             &&
                        <BsBoxArrowInRight className="overflow-artist-icon-right" size="40px" />
                    }
                    </div>
                </ul>
                }
                {   isItem
                        &&
                    <ul className="items-tracks-container"> 
                        {item?.Tracks?.slice(0,5).map((tracks,key) => {
                            return <li className="items-tracks" key={key}>
                                    <img src={tracks.album?.images[0].url} className="items-tracks-image"/>
                                    <p className="item-names item-names-track">{tracks.name}</p>
                                    <Link to={`/artists/${tracks.artists[0].id}`} className="item-tracks-artist-link">
                                            <p className="item-tracks-artist-name">{tracks?.artists[0]?.name}</p>
                                    </Link>
                                    <p className="item-types item-tracks-types">{tracks.type}</p>
                            </li>
                        })}
                    </ul>
                }
                {   isItem  
                        &&
                    <ul className="items-album-container">
                        {item?.Albums?.slice(0,5).map((albums,key) => {
                            return <li key={key} className="items-albums">
                                <Link to={`/albums/${albums.id}`} className="item-albums-link">
                                <div className="items-albums-image" style={{
                                        backgroundImage: `url(${albums.images[0]?.url})`
                                }} />
                                <p className="item-names item-names-album">{albums.name}</p>
                                <p className="item-types item-albums-types">{albums.type}</p>
                                </Link>
                            </li>
                        })}
                    </ul>

                }

                {   isArtist
                        &&
                    <Artist id={id}/>
                }

                {   isSeeAll 
                        &&
                    <ul className="items-artists-see-all-container">
                        {item?.map((artists,key) => {
                            return <li className="items-artists-see-all" key={key}>
                                <Link to={`/artists/${artists.id}`} className="items-artists-see-all-link">
                                <div className="items-artist-image items-artists-see-all-image" style={{
                                        backgroundImage: `url(${artists.images[0]?.url})`
                                    }} />
                                    <p className="item-names">{artists.name}</p>
                                </Link>
                            </li>   
                        })}
                    </ul>


                }

                {   contextMenuAttributes.visible && 
                    <CustomContextMenu styles={{
                        position: "absolute",
                        top: contextMenuAttributes.positionY,
                        left: contextMenuAttributes.positionX,
                        width: "200px"
                        }}
                        contentCustomContextMenu={menu.map(items => {
                            return <li>
                                {items}
                            </li>

                        })}/>
                    }
            </div>
        </div>


    )

}


export default SearchItem;