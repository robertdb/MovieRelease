import React, { Component } from 'react';
import { Container } from './style';
import Card from './components/Card';
import GlobalStyle from "./GlobalStyle";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Container>
          <Card
            release={new Date("March 3, 2019 00:00:01").getTime()}
            title="La voz de la igualdad"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/234.jpg'}
          />
          <Card
            release={new Date("March 28, 2019 00:00:01").getTime()}
            title="La Rebelión"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/241.jpg'}
          />
          <Card
            release={new Date("April 4, 2019 00:00:01").getTime()}
            title="Hellboy"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/248.jpg'}
          />
          <Card
            release={new Date("April 4, 2019 00:00:01").getTime()}
            title="4x4"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/245.jpg'}
          />
          <Card
            release={new Date("April 4, 2019 00:00:01").getTime()}
            title="Shazam"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/243.jpg'}
          />
          <Card
            release={new Date("April 18, 2019 00:00:01").getTime()}
            title="La Maldición de la llorona"
            img={'https://static.cinemarkhoyts.com.ar/Images/ComingSoon/200x285/250.jpg'}
          />
          <Card
            release={new Date("April 26, 2019 00:00:01").getTime()}
            title="Avengers 4: Endgame"
            img={'https://img.ecartelera.com/noticias/fotos/45900/45976/2.jpg'}
          />
        </Container>
      </div>

    );
  }
}

export default App;
