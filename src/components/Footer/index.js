import React from 'react';
import { Container } from './styles';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin, AiFillPhone } from "react-icons/ai";

function Footer() {
  return <>
    <Container>
      <div className="main">
        <h1>Contact</h1>
        <div className="item-contact">
          <AiFillGoogleCircle/>
          <p>carlosdantas485@gmail.com</p>
        </div>

        <div className="item-contact">
          <a href="https://github.com/Carlosdantas485">
          <AiFillGithub/>
          <p>Carlos Dantas</p>
          </a>
        </div>

        <div className="item-contact">
          <a href="https://www.linkedin.com/in/carlos-alberto-dantas-filho-a10257195/">
          <AiFillLinkedin/>
          <p>Carlos Dantas</p>
          </a>
        </div>

        <div className="item-contact">
          <AiFillPhone/>
          <p>(11) 98250-2027</p>
        </div>
      </div>

      <div className="main">
        <h1>About</h1>
        <div className="item-contact">
          <a href="">
          <p>The game</p>
          </a>
        </div>

        <div className="item-contact">
          <a href="">
          <p>Suport</p>
          </a>
        </div>

        <div className="item-contact">
          <a href="">

          <p>How to Play ?</p>
          </a>
        </div>


      </div>

      <div className="main">
        <h1>Creator</h1>
        <div className="item-contact">
          <p>Carlos Alberto Dantas Filho</p>
        </div>

        <div className="item-contact">
          <p>06/051996</p>
        </div>

        <div className="item-contact">
          <p>Rua Roma, N°346, itapecerica da serra</p>
        </div>

        <div className="item-contact">
          <p>Front-end</p>
        </div>
      </div>
      
    </Container>
  </>;
}

export default Footer;