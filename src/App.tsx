import { useEffect, useState } from 'react'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'
import { api } from './services/api'

import './styles/global.scss'
import './styles/sidebar.scss'
import './styles/content.scss'
import { IGenreResponse } from './interfaces/IGenderResponse'

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponse>(
    {} as IGenreResponse
  )

  useEffect(() => {
    api.get<IGenreResponse>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  function handleClickButtonToChangeGenreId(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButtonToChangeGenreId}
      />
      <Content
        selectedGenreId={selectedGenreId}
        selectedGenre={selectedGenre}
      />
    </div>
  )
}
