import React from 'react';
import '../Home/Home.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

  
    return (
        <div>
            <Navbar className='header-css' collapseOnSelect expand="lg" variant="dark">
  <Container>
  <Navbar.Brand className='ICON-CSS'>HABIB</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className='m-auto nav-link'>
    <Link to='/home'>Home</Link>
    <Link to='about'>About</Link>
    <Link to='sdf'>Blog</Link>
    <Link to='contract'>Contract</Link>
    </Nav>
    <Nav>
    <a href='https://drive.google.com/file/d/1GnEmtjXmEV9CNOZOO5uiCGrbRIebRXgy/view?usp=sharing' target='_blank' download><button  className='my-btn-css'>Resume</button></a>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;