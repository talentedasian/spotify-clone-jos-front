import Sidebar from './sideBar/Sidebar';
import SearchItem from './searchItem/searchItem';
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
                <Sidebar home={home} setSearchBar={setSearchBarInput} />
                <SearchItem searchBar={isSearchBar} setSearchBarInput={setSearchBarInput}/>

        </div>


    )
}


export default MainComponent;