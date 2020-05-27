import React, { Component } from 'react';
import '../../App.css';
import SearchBox from '../SearchBoxes/SearchBox'
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
      currentMovie: null
    }
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = (e) => { 
    fetch(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=c5d10750a088d666acc210c6789abd6a&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
    
    e.preventDefault()
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=c5d10750a088d666acc210c6789abd6a&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`)
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

        {this.state.currentMovie == null ? <div><SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/><MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <div><MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} /> <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div>}
          {this.state.totalResults > 20 && this.state.currentMovie == null ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      
      </div>
    );
  }
}

export default App;