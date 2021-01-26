import Sidebar from './Sidebar';
import SearchItem from './searchItem';
import { useState } from 'react';

function MainComponent () {

    const [isSearchBar, setIsSearchBar ] = useState(false);


    return (
        <div className="main-component">
                <Sidebar />
                <SearchItem searchBar={isSearchBar} />
        </div>


    )
}


export default MainComponent;