import Searchbar from './Components/UI/Searchbar';
import Feed from './Components/Forms/Feed';

const Home = () => {

    return (
        <div className="flex w-full">
            <div className="w-full">
                <Searchbar />
                <Feed ApiRoute="Post/GetFeed" />
            </div>
        </div>);
}

export default Home;