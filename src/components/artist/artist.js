import { useEffect, useState } from "react";


function Artist ( props ) {

    const artistUrl = "http://localhost:8080/api/search/artist?id=";
    const [artist,setArtist] = useState('');

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
            {artist[0]?.name}
        </div>

    )
}

export default Artist;