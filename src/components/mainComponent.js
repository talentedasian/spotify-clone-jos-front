import Sidebar from './Sidebar';
import SearchItem from './searchItem';
import { useState } from 'react';

function MainComponent () {

    const [isSearchBar, setIsSearchBar ] = useState(false);
    const [parameters, setParameters] = useState(); 

    const setSearchBarInput = (boolean) => {
        setIsSearchBar(boolean);
    }

    return (
        <div className="main-component">
                <Sidebar setSearchBar={setSearchBarInput}/>
                <SearchItem searchBar={isSearchBar} />

        </div>


    )
}


export default MainComponent;