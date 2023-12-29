export default function Movie({ movie }) {
    const genres = {
        28: "Action",
        35: "Comedy",
        27: "Horror",
        80: "Crime",
        18: "Drama",
        878: "SciFi",
        53: "Thriller",
        10749: "Romance",
        36: "History",
        37: "Western",
        14: "Fantasy",
        16: "Animation",
        10751: "Family",
        12: "Adventure",
        9648: "Mystery",

    }
    const movie_poster = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
    return (
        <div className="movie-box" style={{backgroundImage:`linear-gradient(to bottom, transparent, black), url(${movie_poster})`}}>
            
            <div className="movie-title">{ movie.title }</div>
            <div className="movie-rating">{movie.vote_average}</div>
            <div className="movie-genre">
                {movie.genre_ids.map(item => <span key={item}>{(genres[item] ? genres[item] : item)}</span>)}
            </div>
        </div>
    )
}