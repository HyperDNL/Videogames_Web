import { MDBRipple } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export function VideogameCard({ videogame }) {
  const navigate = useNavigate();

  return (
    <div className="cover-container">
      <MDBRipple
        rippleTag="div"
        className="bg-image hover-overlay hover-zoom hover-shadow"
      >
        <img src={videogame.image_cover} className="w-100" />
        <div
          onClick={() => navigate(`/viewVideogame/${videogame._id}`)}
          className="mask grid grid-cols-2 place-items-center"
          style={{ backgroundColor: "rgba(30, 33, 38, 0.6)" }}
        ></div>
      </MDBRipple>
    </div>
  );
}
