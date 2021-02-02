import { useState } from "react";


function Home ( props ) {

    const homeUrl = "http://localhost:8080/api/user/saved-albums"
    const [home,setHome] = useState('albums');


    const fetchHome = () => {
        fetch(homeUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setHome(data);
            if (home.length === 0) {
                console.log("null");
            }
        })
    }

    if (home.length === 0) { console.log("no saved albums");
        return "no saved albums"
       
    }

    return (
        <div className="home-js">
            <div>
                
            </div>
        </div>
            

    );

}

export default Home;