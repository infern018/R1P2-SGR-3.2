import React, { Component } from 'react';
import '../../App.css';
import SearchByGenre from '../SearchBoxes/SearchByGenre'
import MovieList from '../Movie/MovieList'
import Pagination from '../Misc/Pagination'
import MovieInfo from '../MovieInfo/MovieInfo';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      totalResults: 0,
      searchTerm: '',
      currentPage: 1,
      currentMovie: null,
      byGenre:false,
      byTitle:false
    }
  }

 


  handleChange2 = (e) => {

    let genres = [
      {name: 'action', genre_id: 28},
      {name: 'comedy', genre_id: 35},
      {name: 'drama',  genre_id: 18},
      {name: 'adventure', genre_id: 12},
      {name: 'animation', genre_id: 16},
      {name: 'crime', genre_id: 80},
      {name: 'documentary', genre_id: 99},
      {name: 'family', genre_id: 10751},
      {name: 'fantasy', genre_id: 14},
      {name: 'history', genre_id: 36},
      {name: 'horror', genre_id: 27},
      {name: 'music', genre_id: 10402},
      {name: 'mystery', genre_id:9648},
      {name: 'romance', genre_id:10749},
      {name: 'science fiction', genre_id: 878},
      {name: 'thriller', genre_id: 53},
      {name: 'war', genre_id: 10752}
  ];
    let genre_name = e.target.value;
    let name_l = String(genre_name);
    let lowerC = name_l.toLowerCase(); 

    let genreId=28;
  
    for(let j=0;j<17;j++)
    {
        
        if(genres[j].name === lowerC )
        {
            genreId=genres[j].genre_id;
        }
    }

    this.setState({ searchTerm: genreId })
  }

  

  handleSubmit2 = (e) => { 
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c5d10750a088d666acc210c6789abd6a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results, byGenre:true})
    })
    
    e.preventDefault()
  }


  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c5d10750a088d666acc210c6789abd6a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_genres=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results, currentPage: pageNumber})
    })
  }


  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.movies.forEach((movie, i) => {
      if(movie.id === id) {
        filteredMovie = movie
      }
    }) 

    this.setState({ currentMovie: filteredMovie })  
  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
  }

  render() {
    let numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
                    
      {this.state.currentMovie == null ? <div><SearchByGenre handleSubmit2={this.handleSubmit2} handleChange2={this.handleChange2}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <div><MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} /><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div>}
        {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
    </div>
    );
  }
}

export default App;