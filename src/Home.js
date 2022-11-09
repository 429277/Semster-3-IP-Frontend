import Searchbar from './Components/UI/Searchbar';
import Feed from './Components/Forms/Feed';

const Home = () => {

    return (<div className="flex">
        <div>
            <Searchbar />
            <Feed />
        </div>
    </div>);
}

export default Home;