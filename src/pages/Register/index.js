import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

function Register() {
  return <>

    <Container>
      <Header/>
      <div className="main">
        <div className="title">
          <h1>Login</h1>
        </div>

        <div className="body">
          <div className="box">
            <div className="box-input">
              <div className="username-title">
                <h2>Username</h2>
                <input type="text"/>
              </div>
            </div>
            <div className="box-input">
              <div className="username-title">
                <h2>Password</h2>
                <input type="password"/>
              </div>
            </div>
            <button>Enter</button>

            <div className="options">
              <Link to="/createAcount">
                <h3>Create Acount</h3>
              </Link>
              <Link to="/register">
                <h3 className="recover">Forgot Passord</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  </>;
}

export default Register;