import React from "react";
import { Nav, Navbar} from "react-bootstrap/";
import { Link } from "react-router-dom";
import "../../css/NavBarB.css";
import logo from '../../assets/img/logosn.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTranslate } from '../../store/translate.Slice';


export const NavBarB = () => {
  
    const translate = useSelector(state => state.translate);

    const dispatch = useDispatch();
   

 
    return (
            <Navbar className="Nav"  fixed="top" expand="lg"  variant="light">
              <img className="nav-img"
                src={logo}
                alt="logo"
              />
              <button className="btn position__btn" onClick={()=>{dispatch(toggleTranslate())}}>Translate</button>
            
              <Navbar.Toggle style={{background: "url(https://thumbs.dreamstime.com/z/men%C3%BA-de-la-hamburguesa-mejor-l%C3%ADnea-gris-icono-del-vector-en-el-fondo-blanco-eps-148296411.jpg)"}} className="menu" aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                <Nav className= "m-4">
                  <Nav.Link onClick={() => {window.scrollTo(0, 0)}} as={Link} to="/home">{translate ? 'Sobre mi ': 'About me'}</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/technologies">{translate ? 'Tecnologías' : 'Technologies'}</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/projects">{translate ? 'Proyectos' : 'Projects'}</Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/education">{translate ? 'Educación' : 'Education'} </Nav.Link>
                  <Nav.Link onClick={() => window.scrollTo(0, 0)} as={Link} to="/contacto">{translate ? 'Contactame' : 'Contact'}</Nav.Link>
                </Nav>
                  </Navbar.Collapse>
            </Navbar>
          );
        };