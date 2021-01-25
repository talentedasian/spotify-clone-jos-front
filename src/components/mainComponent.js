import Sidebar from './Sidebar';
import SearchItem from './searchItem';
import { useState } from 'react';

function MainComponent () {

    const [isSearchBar, setIsSearchBar ] = useState(false);


    return (
        <div className="main-component">
            <div className="side-bar">
                <Sidebar />
            </div>
            <div className="search-item">
                <SearchItem searchBar={isSearchBar}/>
            </div>

        </div>


    )
}


export default MainComponent;