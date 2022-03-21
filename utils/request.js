const API_Key = process.env.TMDB_API_KEY

export const getMoviesList = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/list/1?api_key=${API_Key}&language=en-US`
  )
  const data = await res.json()

  return {
    movies: data.items,
    list: {
      listTitle: data.name,
      listID: data.id,
    },
  }
}

// export default {
//   fetchTrending: {
//     title: 'Trending',
//     url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   },
//   fetchTopRated: {
//     title: 'Top Rated',
//     url: `/movie/top_rated?api_key=${API_KEY}&language%=Den-US`,
//   },
//   fetchActionMovies: {
//     title: 'Action',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   },
//   fetchComedyMovies: {
//     title: 'Comedy',
//     url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   },
// }
