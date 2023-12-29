import { useEffect, useState, useRef } from "react";
import axios from "axios";
import './sass/main.scss';
import MovieList from "./Layout/MovieList";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([0]);
  const hi = useRef(2012);
  const lo = useRef(2012);
  useEffect(() => {
    (async () => {
      await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${2012}&page=1&vote_count.gte=100`)
        .then(res => {
          setData( prev => [...prev, {year: 2012, movies: res.data.results}]);
        })
    })()
  }, []);

  useEffect(() => {
    let el = document.getElementById('scroller');
    let prevHeight = 0;
    window.onscroll = () => {
    
      if(window.scrollY <= 50 && prevHeight > 50){
        loadMoreRev();
      } 
      if(window.scrollY + window.innerHeight >= el.scrollHeight){
        loadMore();
      }
      prevHeight = window.scrollY;
    }

    return () => {
      window.onscroll = null;
    }
  }, []);

  const loadMore = async () => {
    var c = hi.current+1;
    if(hi.current === 2023) return;
    hi.current++;
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${c}&page=1&vote_count.gte=100`)
        .then(res => {
          setData( prev => [...prev, {year: c, movies: res.data.results}]);
        });
  }

  const loadMoreRev = async () => {
    var c = lo.current-1;
    if(lo.current === 1950) return;
    lo.current--;
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=${c}&page=1&vote_count.gte=100`)
    .then(res => {
      setData( prev => [{year: c, movies: res.data.results}, ...prev]);
    })
  }


  return (
    <>
    <Filter setGenre={setGenre}/>
    <div id="scroller">
      {
        data.map(item => <MovieList key={item.year} genre={genre} year={item.year} movies={item.movies}/>)
      }
    </div>
    </>
  );
}

export default App;
