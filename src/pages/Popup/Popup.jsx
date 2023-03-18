import React, { Component } from 'react';
import logo from '../../assets/img/logo_real.png';
//import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Switch } from '@chakra-ui/react'

class Popup extends Component {

  state = {}

  render() {

    return (
      <ChakraProvider>
        <div className="App">
          <header className="d-flex flex-column app-header">
            <div className="text-center intro">Fact Check the Internet With</div>
            <img src={logo} className="App-logo" alt="logo" />
            <hr />
            <p className="main-text">
              Insight is a real fact checking tool powered by AI to do stuff. Runs in the background
            and can validate tweets from politicians. <a href="google.com" target="_blank">Learn more</a>
            </p>
            <div className="row d-flex slider ">
              <p className="col right">
                Enabled
              </p>
              <Switch size="md" colorScheme="orange" className="col left" />
            </div>
          </header>
        </div>
      </ChakraProvider>

    );
  }
}


export default Popup;





