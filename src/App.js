import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Kishor from './pages/Kishor';
import Kaustubh from './pages/Kaustubh';
import Kartik from './pages/Kartik';
import Koustav from './pages/Koustav';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/kishor">
            <Kishor />
          </Route>
          <Route path="/kaustubh">
            <Kaustubh />
          </Route>
          <Route path="/kartik">
            <Kartik />
          </Route>
          <Route path="/koustav">
            <Koustav />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
