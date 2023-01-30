import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from "./components/Nav.js"

function App() {
 return (
    <div>
      <Nav/>
    </div>
  )
}


ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
