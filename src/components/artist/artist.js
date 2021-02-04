import { useEffect, useState } from "react";
import './artist.css'

function Artist ( props ) {

    const artistUrl = "http://localhost:8080/api/search/artist?id=";
    const [artist,setArtist] = useState('');
    
    const nf = new Intl.NumberFormat();
    function numberWithCommas(x) {
        return nf.format(x)
    }

    useEffect(() => {
        fetch(artistUrl + props.id)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setArtist(data);
        })
        .catch(err => console.log(err));
    }, [props.id])

    return (
        <div className="artist-js">
            <div className="artist-profile-container">
                <p >{artist[0]?.name}</p>
                <p>{numberWithCommas(artist[0]?.followers?.total)}</p>
            </div>
        </div>

    )
}

export default Artist;