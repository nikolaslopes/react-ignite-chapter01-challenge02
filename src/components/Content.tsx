import { useEffect, useState } from 'react'
import { IContent } from '../interfaces/IContent'
import { IMovie } from '../interfaces/IMovie'
import { api } from '../services/api'
import { MovieCard } from './MovieCard'

export function Content({ selectedGenreId, selectedGenre }: IContent) {
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    api
      .get<IMovie[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data)
      })
  }, [selectedGenreId])

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              rating={movie.Ratings[0].Value}
              runtime={movie.Runtime}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
