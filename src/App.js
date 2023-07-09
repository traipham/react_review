import {useState, useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './movieCard';
/**
 * Building a music library web app
 * 
 */

// Movie API Key: 5b535e4c

// https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow authentication for spotify api token

const API_URL = 'http://www.omdbapi.com?apikey=5b535e4c';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data= await response.json()

        setMovies(data.Search);
        console.log(data.Search);
    };

    useEffect(() => {
        searchMovie('Ironman');
    }, []);

    return(
        <div className='App'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies' 
                    value={searchTerm} 
                    onChange={(e) => {setSearchTerm(e.target.value)}}/>
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => {
                        searchMovie(searchTerm)
                    }}
                />
            </div>
            {
                movies?.length > 0 
                    ? (
                        <div className='container'>
                            { movies.map((movie) => {
                                return <MovieCard movie={movie} />
                            })}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;