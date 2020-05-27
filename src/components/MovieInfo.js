import React from 'react';
import './MovieInfo.css'

const MovieInfo = (props) => {      
    return (
        <div>
            <div className="container">
                <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    <span style={{marginLeft: 10}}>Go back</span>
                </div>
                <div className="row movie-card-container">
                    <div className="col s12 m4">
                        { props.currentMovie.poster_path == null ? <img className="image" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{ width: "100%"
                            }} /> : <img className="image" src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%"
                            }} />}
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container movie-card">
                            <h3 className="text2">{props.currentMovie.title}</h3>
                            <p>Released: {props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                            <h5>Overview: </h5>
                            <p className="text" >{props.currentMovie.overview}</p>
                            <p>Rating:   {props.currentMovie.vote_average}<i class="fa fa-star" aria-hidden="true"></i></p>
                            <input className="waves-effect waves-light btn" type="button" onClick={props.handleClick} value="Add to Watch Later"/>
                        </div>
                    </div>            
                </div>
                <h2>Similar Movies:</h2>
            </div>
        </div>
    )
}

export default MovieInfo;