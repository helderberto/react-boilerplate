import React from 'react';

import logoReact from './assets/images/logo-react.png';

const App = () => (
  <div className="app-container">
    <img src={logoReact} className="app-logo" alt="React Boilerplate" />

    <h1 className="app-title">Welcome to the React Boilerplate</h1>
  </div>
);

export default App;
