import React, { useState, useEffect } from "react";

function UpdateMovie(props) {
    const [movie,setMovie] = useState({
        id:"",
        title:"",
        director:"",
        stars:[]
    })

    useEffect(()=>{
        setMovie({
            // id:props.movie.id,
            // title:props.movie.title,
            // director:props.movie.director,
            // stars:props.movie.stars,
        })


    },[props])

    const handleChange = (e) => {
        setMovie({
            ...movie,[e.target.name] : e.target.value
        })
        console.log(movie);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //Make the axios update call
    }


    return (
        <div className="movie-list">
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={movie.title} onChange={handleChange}></input>
            <label htmlFor="director">Director</label>
            <input type="text" name="director" value={movie.director} onChange={handleChange}></input>
            <button>Update movie</button>
        </form>
        </div>
    );
}

export default UpdateMovie;
