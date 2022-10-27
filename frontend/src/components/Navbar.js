import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { BubblyLink } from "react-bubbly-transitions";

export function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" className="navbar-style">
      <MDBContainer fluid>
        <h4 className="navbar-title">Videogames API</h4>
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <FaBars className="navbar-bars" />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <BubblyLink to="/" colorStart="#ed343e" colorEnd="#1E2126">
              Home
            </BubblyLink>
            <BubblyLink
              to="/newVideogame"
              colorStart="#ed343e"
              colorEnd="#1E2126"
            >
              Add Videogame
            </BubblyLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
