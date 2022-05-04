import { h } from 'preact';
import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import About from '../routes/about';

const App = () => (
  <div id="app">
    <Header />
    <Router history={createHashHistory()}>
      <Home path="/" />
      <About path="/about" />
    </Router>
    <Footer />
  </div>
);

export default App;
