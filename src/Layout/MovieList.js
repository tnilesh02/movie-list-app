
import Movie from "../components/Movie"
export default function MovieList({ genre, year, movies }) {
    
    return (
        <div className="movielist-section">
            <div className="movielist">
                <div className="movielist-year">{year}</div>
                <div className="movielist-list">
                    {movies.filter((item) => {
                        if(genre.includes(0)){
                            
                            return true;
                        }
                        for(let x of genre){
                            if(x === 0 ){
                                return true;
                            }
                            if(!item.genre_ids.includes(x)){
                                return false;
                            }
                        }
                        return true;
                    })
                            .map((movie) => <Movie key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    )
}