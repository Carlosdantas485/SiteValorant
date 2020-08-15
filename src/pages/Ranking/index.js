import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Rankings from '../../assets/rankings.jpg';


function Ranking() {
  return <>
    <Container>
      <Header/>
      <div className="main">
        <div className="title">
          <h1>Rankings </h1>
        </div>

        <div className="body">
          <div className="div-img">
            <img src={Rankings}/>
          </div>
        </div>

      </div>

      <Footer/>
    </Container>
  </>;
}

export default Ranking;