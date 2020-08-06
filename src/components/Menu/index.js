import React from 'react';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './menu.css';

function Menu() {
    return (
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={logo} alt="RickFlix logo" />
        </Link>
  
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    );
  }
  
  export default Menu;