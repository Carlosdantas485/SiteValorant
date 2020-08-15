import React from 'react';
import { Container } from './styles';
import Logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom';

function Header() {

  
  return <>
    <Container>
      <div className="header">
        <div className="headers">
         <Link to="/">
            <img src={Logo} className="logo"/>
            <h1>VALORANT</h1>
          </Link>
        </div>
        <div className="options">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/Avatars">
            <button>Champions</button>
          </Link>
          <Link to="/ranking">
            <button>Rankings</button>
          </Link>
          
          <div className="btnDownload">
          <button class="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>Download</span>
          </button>
          </div>
        </div>
      </div>
      

    </Container>
  </>;
}

export default Header;