import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import NavBar from './NavBar.jsx';
import CarView from './CarView.jsx';

const MOUNT_NODE = document.getElementById('root')



const App = () => (
  <Container>
  <NavBar/>
  <CarView/>

  </Container>
);

render(<App />, MOUNT_NODE);


//     <Header as='h1'>Hello world!</Header>
//   <button className="ui primary button" role="button">Primary</button>
//   <button className="ui secondary button" role="button">Secondary</button>

//   <div className="ui grid container">
//   <div className="four wide column">1</div>
//   <div className="four wide column">2</div>
//   <div className="four wide column">3</div>
//   <div className="four wide column">4</div>
//   <div className="four wide column">5</div>
//   <div className="four wide column">6</div>
//   <div className="four wide column">7</div>
//   <div className="four wide column">8</div>
// </div>

//   <CarView/>
//   <CarFeed/>