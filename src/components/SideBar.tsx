import { useEffect, useState } from 'react'
import { IGenreResponse } from '../interfaces/IGenderResponse'
import { ISidebar } from '../interfaces/ISidebar'
import { Button } from './Button'
import { api } from '../services/api'

export function SideBar({ selectedGenreId, handleClickButton }: ISidebar) {
  const [genres, setGenres] = useState<IGenreResponse[]>([])

  useEffect(() => {
    api.get<IGenreResponse[]>('genres').then((response) => {
      setGenres(response.data)
    })
  }, [])

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
