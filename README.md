
# Movie-Looper
A ReactJs based web app that brings to you your favorite movies on just a simple search by fetching data from tMDB API.

## Live-Link
[Movie-Looper](https://mighty-savannah-47226.herokuapp.com/)

For loading REACT web apps, heroku requires some time, hence the live link takes few seconds to load.



## Dependencies
![](https://img.shields.io/badge/npm-v6.13.4-blue)  ![](https://img.shields.io/badge/node-v12.6.1-green)

## Setup
Get the code by cloning this repository using git
```
git clone  https://github.com/infern018/R1P2-SGR-3.2.git
```
Once downloaded, open the terminal in the project directory and install dependencies listed in package json with :

```
npm install <dependency>
```
 Start the app with
```
npm start
```
The app should now be running at https://localhost:3000.

## Repo Structure
```
/
|-- node-modules/			        #Dependencies
|
|-- public/ 			           	#default react app logo, favicon and other files
	|-- index.html 		        	#contains links of the styling frameworks
|
|-- src/
	|-- components/			        #all the components of the react app 
			|-- Home/		#home page
			|-- Misc/	        #pagination of results
			|-- Movie/     	        #list of movies
			|-- MovieInfo/		#details of a particular movie
			|-- Nav/		#Navbar
			|-- SearchBoxes/	#Search by Title/Genre Boxes
			|-- SearchLogic/	#Different API Calls for Title/Genre
			|
			|-- App.js 		#index Js app holding the primary components
|
|-- index.js		              		#hosting file for App.js
|-- package.json			        #project properties
|-- package-lock.json			    	#dependencies
```
## Styling frameworks
The app uses following frameworks to ease styling of the app:
- [Font Awesome](https://fontawesome.com/)
- [Materialize](https://materializecss.com/)


## API 
The data of movies is fetched using the following API : [TMDB](https://www.themoviedb.org/documentation/api) 

Code Snippet:
```
    fetch(`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=${API_key}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
```
## Deployment
The live version of the website is hosted via : [Heroku](https://www.heroku.com/)
