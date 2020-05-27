  
import React from 'react';
import './Movie.css'

const Movie = (props) => {
    // let formatDate = props.date.split("-").reverse().join("/");

    return (
        <div className="col s12 m6 l3">
            <div class="card">
            <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
                <div class="card-image waves-effect waves-block waves-light">
                    { props.image == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%",
                        height: 360}}/> : <img className="" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" style={{ width: "100%",
                        height: 360}} />}
                </div>
            </a>
                {/* <div class="card-content">                    
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>             */}
            </div>
        </div>
    )
}

export default Movie;