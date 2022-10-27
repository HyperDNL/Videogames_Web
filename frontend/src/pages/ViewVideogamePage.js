import { useParams, useNavigate } from "react-router-dom";
import { useVideogames } from "../context/videogameContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function ViewVideogamePage() {
  const { getVideogame, deleteVideogame } = useVideogames();
  const params = useParams();
  const navigate = useNavigate();

  const [videogame, setVideogame] = useState({});

  useEffect(() => {
    (async () => {
      if (params.id) {
        const data = await getVideogame(params.id);
        setVideogame(data);
      }
    })();
  }, []);

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="toast-text">
          <p>Do you want to delete?</p>
          <div className="btn-toast-container">
            <button
              className="btn-red"
              onClick={() => {
                deleteVideogame(id);
                toast.dismiss(t.id);
                navigate("/");
              }}
            >
              Delete
            </button>
            <button className="btn-normal" onClick={() => toast.dismiss(t.id)}>
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#424858",
        },
      }
    );
  };
  return (
    <div className="animate-in" style={{ animationDelay: "400ms" }}>
      <div className="data-container">
        <div className="cover-view">
          <div className="banner-cover-container">
            <img src={videogame.image_cover} className="img-view"></img>
            <div className="btn-options-container">
              <button
                className="btn-edit"
                onClick={() => navigate(`/editVideogame/${videogame._id}`)}
              >
                Edit
              </button>
              <button
                className="btn-red"
                onClick={() => handleDelete(videogame._id)}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="banner-info">
            <div className="vg-properties">
              <h1 className="vg-title">{videogame.title}</h1>
            </div>
            <div className="vg-properties">
              <p className="vg-developer">{videogame.developer}</p>
            </div>
            <div className="vg-properties">
              <p className="vg-year">{videogame.year}</p>
            </div>
            <div className="vg-properties">
              <p className="vg-price">${videogame.price} MXN</p>
            </div>
            <div className="content-container">
              <div className="vg-properties">
                <h4>Descripción</h4>
                <p className="vg-description">{videogame.description}</p>
              </div>
              <div className="vg-properties">
                <h4>Se puede jugar en</h4>
                <p className="vg-platform">{videogame.platform}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-desktop">
        <div className="vg-properties">
          <h4>Descripción</h4>
          <p className="vg-description">{videogame.description}</p>
        </div>
        <div className="vg-properties">
          <h4>Se puede jugar en</h4>
          <p className="vg-platform">{videogame.platform}</p>
        </div>
      </div>
    </div>
  );
}
