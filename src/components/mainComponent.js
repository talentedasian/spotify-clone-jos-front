import Sidebar from './Sidebar';
import SearchItem from './searchItem';

function MainComponent () {



    return (
        <div className="main-component">
            <div className="side-bar">
                <Sidebar />
            </div>
            <div className="search-item">
                <SearchItem />
            </div>

        </div>


    )
}


export default MainComponent;