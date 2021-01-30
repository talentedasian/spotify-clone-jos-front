import Sidebar from './Sidebar';
import SearchItem from './searchItem';
import { useState } from 'react';

function MainComponent () {

    const [isSearchBar, setIsSearchBar ] = useState(false);

    const setSearchBarInput = (boolean) => {
        setIsSearchBar(boolean);
    }

    const home = (boolean) => {
        setIsSearchBar(boolean)
    }

    return (
        <div className="main-component">
                <Sidebar home={home} setSearchBar={setSearchBarInput}/>
                <SearchItem searchBar={isSearchBar} />

        </div>


    )
}


export default MainComponent;