import { useState, createContext, useContext, useEffect } from 'react'
import { createVideogameRequest, getVideogamesRequests, deleteVideogameRequest, getVideogameRequest, updateVideogameRequest } from '../api/videogames'

const videogamesContext = createContext()

export const useVideogames = () => {
  const context = useContext(videogamesContext)
  return context
}

export const VideogameProvider = ({ children }) => {

  const [videogames, setVideogames] = useState([])

  const getVideogames = async () => {
    const res = await getVideogamesRequests()
    setVideogames(res.data)
  }

  const getVideogame = async (id) => {
    const res = await getVideogameRequest(id)
    return res.data
  }

  const createVideogame = async (videogame) => {
    const res = await createVideogameRequest(videogame)
    setVideogames([...videogames, res.data])
  }

  const updateVideogame = async (id, newFields) => {
    const res = await updateVideogameRequest(id, newFields)
    setVideogames(videogames.map((videogame) => (videogame._id === id ? res.data : videogame)))
  }

  const deleteVideogame = async (id) => {
    const res = await deleteVideogameRequest(id)
    if (res.status === 204) {
      setVideogames(videogames.filter((videogame) => videogame._id !== id))
    }
  }

  useEffect(() => {
    getVideogames()
  }, [])

  return <videogamesContext.Provider value={{
    videogames,
    getVideogames,
    getVideogame,
    createVideogame,
    deleteVideogame,
    updateVideogame
  }}>
    {children}
  </videogamesContext.Provider>
}