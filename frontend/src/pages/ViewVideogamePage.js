import { useParams, useNavigate } from "react-router-dom"
import { useVideogames } from "../context/videogameContext"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast'

export function ViewVideogamePage() {
  const { getVideogame, deleteVideogame } = useVideogames()
  const params = useParams()
  const navigate = useNavigate()

  const [videogame, setVideogame] = useState({})

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getVideogame(params.id)
        setVideogame(data)
      }
    })()
  }, [])

  const handleDelete = (id) => {
    toast((t) => (
      <div className='toast-text'>
        <p>Do you want to delete?</p>
        <div className="btn-toast-container">
          <button className='btn-red' onClick={() => {
            deleteVideogame(id)
            toast.dismiss(t.id)
            navigate("/")
          }}>Delete</button>
          <button className='btn-normal' onClick={() => toast.dismiss(t.id)}>Cancel</button>
        </div>
      </div>
    ), {
      style: {
        background: '#424858'
      }
    })
  }

  return (
    <div>
      <div className="btn-options-container">
        <button className="btn-edit" onClick={() => navigate(`/editVideogame/${videogame._id}`)}>
          Edit Info
        </button>
        <button className="btn-red" onClick={() => handleDelete(videogame._id)}>
          Delete
        </button>
      </div>
      <div className="data-container">
        <div>
          <div className="img-landscape-view">
            <img src={videogame.image_land} className='image-land-view'></img>
          </div>
        </div>
        <div>
          <div className="img-cover-view">
            <img src={videogame.image_cover} className='image-view'></img>
          </div>
        </div>
        <div>
          <div>
            <h2 className="vg-title">{videogame.title}</h2>
          </div>
          <div>
            <p className="vg-description">{videogame.description}</p>
          </div>
          <div className="vg-properties">
            <span className="vg-developer">{videogame.developer}</span>
          </div>
          <div className="vg-properties">
            <p className="vg-developer">{videogame.price}</p>
          </div>
          <div className="vg-properties">
            <p className="vg-year">{videogame.year}</p>
          </div>
          <div className="vg-properties">
            <p className="vg-platform">{videogame.platform}</p>
          </div>
        </div>
      </div>
    </div>
  )
}