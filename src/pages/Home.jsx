import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard"
import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API
const apiKEY = import.meta.env.VITE_API_KEY

const Home = () => {
    const[topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(()=> {

        const topRatedURL = `${moviesURL}top_rated?${apiKEY}`

        getTopRatedMovies(topRatedURL)

    }, [])

    return(
        <div className="container">
           <h2 className="title">Melhores filmes:</h2>
           <div className="movies-container">
                {topMovies === 0 && <p>carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
           </div>
        </div>
    )
}

export default Home