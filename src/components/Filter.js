import { useState } from "react";

export default function Filter({ setGenre }) {
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
    const [curr, setCurr] = useState([0]);
    const handleGenreChange = (code) => {
        
        if(curr.includes(code)){
            //console.log(curr);
            let temp = [...curr];
            temp = temp.filter(item => item !== code);
            if(temp.length === 0){
                temp = [0];
            }
            setCurr(temp);
            setGenre(temp);
            return ;
        }
        let temp = [...curr];
        if(code !== 0){
            temp = temp.filter(item => item !== 0);
        } else {
            temp = [];
        }
        temp.push(code);
        setGenre(temp);
        setCurr(temp);
    }
    return (
        <div className="section filter-section">
            <div className="container filter">
                {
                    Object.keys(genres).map((item) => <button key={item} onClick={() => handleGenreChange(item)} className={`filter-button ${curr.includes(item) ? "filter-active" : ""}`}>{genres[item]}</button>)
                }               
            </div>
        </div>
    )
}