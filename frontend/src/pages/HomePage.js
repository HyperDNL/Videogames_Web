import { useVideogames } from "../context/videogameContext"
import { VideogameCard } from "../components/VideogameCard"

export function HomePage() {
  const { videogames } = useVideogames()

  if (videogames.length === 0) return (
    <div className='no-videogames-container'>
      <h1 className='no-videogames-text'>There are no Videogames</h1>
    </div>
  )
  return (
    <div>
      <div className="videogames-container">
        {videogames.map(videogame => (
          <VideogameCard videogame={videogame} key={videogame._id} />
        ))}
      </div>
    </div>
  )
}