import PopularMovies from "./PopularMovies"
import Tranding from "./Tranding"

const Home = () => {
    return (
        <div className='content'>
            <div className='home'>
                {/* <Main /> */}
                <PopularMovies />
                <Tranding />
            </div>
        </div>
    )
}

export default Home;