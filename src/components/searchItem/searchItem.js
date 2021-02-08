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
    const [seeAllParamters,setIsSeeAllParameters] = useState();

    const [isOverflown,setIsOverflown] = useState(false);

    const fetchAPI = (params) => {
            fetch(itemUrl + params)
            .then(res => res.json())
            .then(data => {
                    if (data.Status === "400") {
                        console.log("400 Request Parameters Invalid");
                        setIsOverflown(false);
                    } 

                    setItem(data);
                    setIsItem(true);
                    setIsSeeAll(false);
                    console.log(data);
                    setParameters(params)
                })
            .catch(err => console.log(err));
    }
    
    const fetchAPIAll = (itemType) => {
        fetch("http://localhost:8080/api/search/item-" + itemType + "?name=" + parameters)
        .then(res => res.json())
        .then(data => {
                if (data.Status === "400") {
                    console.log("400 Request Parameters Invalid");
                    setIsOverflown(false);
                } 

                setItem(data);
                setIsItem(false);
                setIsSeeAll(true);
                console.log(data);
            })
        setIsSeeAllParameters(itemType);
        props.setSearchBarInput(false);
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
                {   isItem
                         && 
                    <Link to={`/artists/all/${parameters}`} className="see-all-link" onClick={e => fetchAPIAll("artist")}>
                            see all
                    </Link>
                }
                {   isItem
                        &&
                    <div className="items-artist-container"> 
                        {item?.Artists?.slice(0,5).map((artists) => {
                            return <Link to={`/artists/${artists.id}`} className="items-artist-link items-link items-artists"
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
                        })}
                </div>
                }
                {   isItem
                         && 
                    <Link to={`/playlists/all/${parameters}`} className="see-all-link" onClick={e => fetchAPIAll("playlist")}>
                            see all
                    </Link>
                }
                {   isItem
                        &&
                    <div className="items-playlists-container">
                        {item?.Playlists?.slice(0,5).map((playlists) => {
                            return <Link className="items-playlists-link">
                                        <div className="items-artist-image" style={{
                                            backgroundImage: `url(${playlists.images[0]?.url})`
                                        }} />
                                        <p className="item-playlists-names item-names">{playlists.name}</p>
                                        <p className="item-playlists-types item-types">{playlists.type}</p>
                                    </Link>
                        })}
                    </div>

                }
                {   isItem
                        &&
                    <div className="items-albums-tracks-container">
                        <ul className="items-tracks-container"> 
                            {item?.Tracks?.slice(0,5).map((tracks,key) => {
                                return <li className="items-tracks" key={key}>
                                        <img src={tracks.album?.images[0].url} className="items-tracks-image"/>
                                        <p className="item-names item-names-track">{tracks.name}</p>
                                        <p className="item-types item-tracks-types">{tracks.type}</p>
                                        <Link to={`/artists/${tracks.artists[0].id}`} className="item-tracks-artist-link">
                                                {tracks?.artists[0]?.name}
                                        </Link>
                                </li>
                            })}
                        </ul>
                        <ul className="items-album-container">
                            {item?.Albums?.slice(0,5).map((albums,key) => {
                                return <Link to={`/albums/${albums.id}`} className="item-albums-link items-albums">
                                        <div className="items-albums-image" style={{
                                                backgroundImage: `url(${albums.images[0]?.url})`
                                        }} />
                                        <p className="item-names item-names-album">{albums.name}</p>
                                        <p className="item-types item-albums-types">{albums.type}</p>
                                    </Link>
                            })}
                        </ul>
                    </div>
                    }


                {   isArtist
                        &&
                    <Artist id={id}/>
                }

                {   isSeeAll 
                        &&
                    <ul className="items-artists-see-all-container">
                        {item?.map((artists,key) => {
                            return  <Link to={`/${seeAllParamters}/${artists.id}`} className="items-artists-see-all-link items-artists-see-all">
                                    <div className="items-artist-image items-artists-see-all-image" style={{
                                            backgroundImage: `url(${artists.images[0]?.url})`
                                    }} />
                                    <p className="item-names">{artists.name}</p>
                                    </Link>
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