import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import './Menu.css';
import Button from '../Button';


function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="VitinFlix logo" />
            </Link>
            
            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>        
    );
}

export default Menu;