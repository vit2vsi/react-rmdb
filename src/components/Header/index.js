import React from "react";
import { Link } from "react-router-dom";
// import RMDBLogo from "../images";

import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImp, TMDBLogoImp } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
      <LogoImp src={RMDBLogo} alt="rmdb-logo"></LogoImp>
      </Link>
      <TMDBLogoImp src={TMDBLogo} alt="tmdb-logo"></TMDBLogoImp>
    </Content>
  </Wrapper>
);



export default Header;
