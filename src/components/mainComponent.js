import Sidebar from './Sidebar';
import SearchItem from './searchItem';

function MainComponent () {



    return (
        <div className="main-component">
            <div>
                <Sidebar />
            </div>
            <div>
                <SearchItem />
            </div>

        </div>


    )
}


export default MainComponent;