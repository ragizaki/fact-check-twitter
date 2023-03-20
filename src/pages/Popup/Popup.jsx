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
      <div className="App">
        <header className="d-flex flex-column app-header">
          <div className="text-center intro">Fact Check the Internet With</div>
          <img src={logo} className="App-logo" alt="logo" />
          <hr className="header" />
          <p className="main-text">
            Insight is a real-time fact checking tool powered by AI that runs in the background of your twitter feed. Insight
            can automatically verify if the tweet you are looking at is legitamate in a matter of seconds. <a href="google.com" target="_blank" className="link">Learn more</a>
          </p>
          <b classname="enabled">
            Enabled
          </b>
          <div class="button-cover">
            <div class="button r" id="button-1">
              <input type="checkbox" class="checkbox" />
              <div class="knobs"></div>
              <div class="layer"></div>
            </div>
          </div>

        </header>
      </div>
    );
  }
}


export default Popup;





