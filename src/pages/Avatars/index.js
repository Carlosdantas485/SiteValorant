import React, {useState} from 'react';

import { Container } from './styles';
import{ModalAvatar} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Sova from '../../assets/sova.png';
import InfoSova from '../../assets/infosova.jpg';

import Reyna from '../../assets/reyna.png';
import InfoReyna from '../../assets/inforeyna.jpg';

import Raze from '../../assets/raze.png';
import InfoRaze from '../../assets/inforaze.jpg';

import Sage from '../../assets/sage.png';
import InfoSage from '../../assets/infosage.png';

import Cypher from '../../assets/cypher.jpg';
import InfoCypher from '../../assets/infocypher.jpg';

import Breach from '../../assets/breach.png';
import InfoBreach from '../../assets/infobreach.png';

import Omen from '../../assets/omen.png';
import InfoOmen from '../../assets/infoomen.jpg';

import Brimstone from '../../assets/brimstone.png';
import InfoBrimstone from '../../assets/infobrimstone.png';

import Phoenix from '../../assets/phoenix.png';
import InfoPhoenix from '../../assets/infophoenix.png';

import Jett from '../../assets/jett.png';
import InfoJett from '../../assets/infojett.png';

function Avatars() {

  const [showsova, setShowsova] = useState(false);
  const handlesovaShow = () => setShowsova(true);
  const handlesovaClose = () => setShowsova(false);

  const [showReyna, setShowReyna] = useState(false);
  const handleReynaShow = () => setShowReyna(true);
  const handleReynaClose = () => setShowReyna(false);

  const [showRaze, setShowRaze] = useState(false);
  const handleRazeShow = () => setShowRaze(true);
  const handleRazeClose = () => setShowRaze(false);

  const [showSage, setShowSage] = useState(false);
  const handleSageShow = () => setShowSage(true);
  const handleSageClose = () => setShowSage(false);
  
  const [showCypher, setShowCypher] = useState(false);
  const handleCypherShow = () => setShowCypher(true);
  const handleCypherClose = () => setShowCypher(false);

  const [showBreach, setShowBreach] = useState(false);
  const handleBreachShow = () => setShowBreach(true);
  const handleBreachClose = () => setShowBreach(false);

  const [showOmen, setShowOmen] = useState(false);
  const handleOmenShow = () => setShowOmen(true);
  const handleOmenClose = () => setShowOmen(false);

  const [showBrimstone, setShowBrimstone] = useState(false);
  const handleBrimstoneShow = () => setShowBrimstone(true);
  const handleBrimstoneClose = () => setShowBrimstone(false);

  const [showPhoenix, setShowPhoenix] = useState(false);
  const handlePhoenixShow = () => setShowPhoenix(true);
  const handlePhoenixClose = () => setShowPhoenix(false);

  const [showJett, setShowJett] = useState(false);
  const handleJettShow = () => setShowJett(true);
  const handleJettClose = () => setShowJett(false);
  
  
  return <>
    <Container>
    <Header/>
    
    
    <div className="main">
        <div className="title">
          <h1>Champions </h1>
        </div>

        <div className="body">
          <div className="avatar">
            
            <img src={Sova}/>

            <div className="infoAvatar">
              <h2>Sova</h2>
              <h3> Sova is one of the characters that collects the
                 most information on Riot Games' FPS. Similar to Cypher in
                  terms of vision, Sova has a bow that can be equipped with 
                  three types of arrows: a revealing, a shock and another 
                  that crosses almost the entire map.
              </h3>
            </div>
            <div className="btn-info">
              <button type="button" onClick={()=> handlesovaShow()}>
                Powers
              </button>
            </div>
          </div>
          
          <div className="avatar">
            
            <img src={Reyna}/>

            <div className="infoAvatar">
              <h2>Reyna</h2>
              <h3> Raised in the heart of Mexico, Reyna dominates individual combat, standing out with each slaughter performed. Its capacity is only limited by its own expertise, making it quite dependent on performance.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleReynaShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Sage}/>

            <div className="infoAvatar">
              <h2>Sage</h2>
              <h3> Like a true Chinese fortress, Sage brings security to herself and the team wherever she goes. Able to revive allies and ward off aggressive attacks, it offers a calm </h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleSageShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Raze}/>

            <div className="infoAvatar">
              <h2>Raze</h2>
              <h3>Raze arrives from Brazil in an explosion of charisma and lethal weapons. With her "cool" style of play, she is adept at digging up entrenched enemies and cleaning up tight spaces with a nice dose of BUUUM!</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleRazeShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Omen}/>

            <div className="infoAvatar">
              <h2>Omen</h2>
              <h3> Omen, a ghostly memory, hunts in the shadows. He blinds enemies, teleports across the field and lets paranoia take over while the opponent tries to figure out where his next attack will come from.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleOmenShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Jett}/>

            <div className="infoAvatar">
              <h2>Jett</h2>
              <h3> Representing South Korea, her homeland, Jett has an agile and evasive fighting style that allows her to take risks like no one else. It runs through any confrontation, cutting through enemies before they even know who or what hit them.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleJettShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Phoenix}/>

            <div className="infoAvatar">
              <h2>Phoenix</h2>
              <h3> Coming straight from the UK, Phoenix's star power shines through in its fighting style, setting the battlefield on fire with light and style. With help or not, he enters the fight as and when he thinks he should.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handlePhoenixShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Brimstone}/>

            <div className="infoAvatar">
              <h2>Brimstone</h2>
              <h3> Coming directly from the USA, Brimstone's orbital arsenal ensures that his squadron is always at an advantage. His ability to offer usefulness at a distance makes him an unmatched commander on the front lines.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleBrimstoneShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Cypher}/>

            <div className="infoAvatar">
              <h2>Cypher</h2>
              <h3>Cypher, an information salesman from Morocco, is a true one-man surveillance network that keeps an eye on every move of enemies. No secret is safe. No maneuver goes unnoticed. Cypher is always watching</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleCypherShow()}>
                Powers
              </button>
            </div>
          </div>

          <div className="avatar">
            
            <img src={Breach}/>

            <div className="infoAvatar">
              <h2>Breach</h2>
              <h3> Breach, the Swedish bionic man, fires powerful kinetic jets to force a path through enemy territory. The damage and disruption it causes ensures that no fight is just.</h3>
            </div>
            <div className="btn-info">
              <button onClick={()=> handleBreachShow()}>
                Powers
              </button>
            </div>
          </div>

        </div>

      </div>
      <Footer/>
    </Container>
    <ModalAvatar open={showsova} onClose={handlesovaClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handlesovaClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoSova}/>
            
            </div>
    </ModalAvatar>

    <ModalAvatar open={showReyna} onClose={handleReynaClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleReynaClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoReyna}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showSage} onClose={handleSageClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleSageClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoSage}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showRaze} onClose={handleRazeClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleRazeClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoRaze}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showOmen} onClose={handleOmenClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleOmenClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoOmen}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showJett} onClose={handleJettClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleJettClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoJett}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showPhoenix} onClose={handlePhoenixClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handlePhoenixClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoPhoenix}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showBrimstone} onClose={handleBrimstoneClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleBrimstoneClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoBrimstone}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showCypher} onClose={handleCypherClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleCypherClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoCypher}/>
            
            </div>
    </ModalAvatar>
    <ModalAvatar open={showBreach} onClose={handleBreachClose}>
            <div className="containerModal">
               <div className="btn-modal">
                <button
                      type="button"
                      className="back"
                      onClick={()=>handleBreachClose()}
                  >
                    Voltar
                  </button>
               </div>
                
                <img src={InfoBreach}/>
            
            </div>
    </ModalAvatar>
  </>;
}

export default Avatars;