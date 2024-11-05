const API_KEY = "api_key=9f59bf40c91a1ece862a8efc2c7e7ad9"
const BASE_URL = "https://api.themoviedb.org/3/"
const MOVIE_URL = `${BASE_URL}movie/popular?${API_KEY}`
const SEARCH_URL = `${BASE_URL}search/movie?${API_KEY}`
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

//const fetchMovies = (url) => {
    //fetch(url)
        //.then((response)=> response.json())
        //.then((data)=>{
            //console.log(data)
        //})
        //.catch((error)=>console.log(error))
//}

const fetchMovies = async(url)=>{
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        showMovies(data.results)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchMovies(MOVIE_URL)

const movieContainer = document.querySelector('.movieContainer');

const showMovies = (movies)=>{
    movieContainer.innerHTML = ""

    movies.forEach((movie) => {
        const {title, overview, vote_average, poster_path} = movie
        console.log(movie)
        const divTag = document.createElement('div')
        divTag.classList.add('movieBox')
        divTag.innerHTML = `
            <div class="image">
                <img src="${IMAGE_URL}${poster_path}" alt="${title}">
            </div>
            <div class="titleRating">
                <p>${title}</p>
                <p>${vote_average}</p>
            </div>
            <div class="description">
                <p>${overview}</p>
            </div>
        `
        movieContainer.appendChild(divTag)
    })
}

const searchMovie = document.querySelector('.searchInput')
searchMovie.addEventListener('keyup', (e)=>{
   e.preventDefault()
   const inputText = document.querySelector(`.searchInput input`).value
    const searchMovieApi = `${SEARCH_URL}&query=${inputText}`;

    if (inputText) {
       fetchMovies(searchMovieApi)
    } else {
       fetchMovies(MOVIE_URL)
   }
})