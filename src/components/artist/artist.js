import { useEffect, useState } from "react";
import './artist.css'


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
            <div className="artist-profile-container">
            sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />sadkjsadsahdjasdjasjkdhaskjdhsajkdhjask<br />
            </div>
        </div>

    )
}

export default Artist;