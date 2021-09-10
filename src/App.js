import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import FunPage from './pages/FunPage';
import ContactPage from './pages/ContactPage';

class App extends  React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Elizabeth Lin',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Hey Everyone!',
        subTitle: 'It\'s nice to meet you',
        text: 'You can check out my LinkedIn below '
      },

      resume: {
        title: 'RESUME'
      },

      about: {
        title: 'ABOUT ME'
      },
      
      fun: {
        title: 'PHOTOS'
      },

      contact: {
        title: 'LET\'S CHAT',
        subTitle: 'You can also email me at: e34lin@uwaterloo.ca'
      },
    }
  }

  render() {
    return (
      
      <Router>
        <Container className="p-0" fluid={true}> 
          <div class="area p-0" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
          </div >
          
          <Navbar className="border-bottom" bg="light"  expand='lg'>
            <Navbar.Brand>Elizabeth Lin</Navbar.Brand>

            <Navbar.Toggle className="border-0"aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">

              <Nav className="ml-auto">
                <Link className='nav-link'to="/">Home</Link>
                <Link className='nav-link'to="/about">About</Link>
                <Link className='nav-link'to="/resume">Resume</Link>
                <Link className='nav-link'to="/funthings">Photos</Link>
                <Link className='nav-link'to="/contact">Contact</Link>


                
              </Nav>
            </Navbar.Collapse>
          </Navbar>

         

        </Container>       

        <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/> } />
          <Route path="/resume" render={() => <ResumePage title={this.state.resume.title} /> } />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} /> } />
          <Route path="/funthings" render={() => <FunPage title={this.state.fun.title} /> } />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle}/> } />
          <br></br>
          <Footer/>

      </Router>
    );       
  }

}
export default App;
