import React from "react";
import "../navbar/navbar.css";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";


export default function NavBar() {
    return(
        <div>
            <header className="header">
            <Navbar bg="white" expand="lg" className="navbar">
                <Link to='/'>
                <Navbar.Brand className="brand">CHIO</Navbar.Brand>
                </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">HOME</Nav.Link>
                                    <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                                    <Link to='/categoria'>
                                    <NavDropdown.Item>Monitores</NavDropdown.Item>
                                    </Link>
                                    <Link to='/categoria'>
                                    <NavDropdown.Item>Teclados</NavDropdown.Item>
                                    </Link>
                                    <Link to='/categoria'>
                                    <NavDropdown.Item>Mouse's</NavDropdown.Item>
                                    </Link>
                                    <NavDropdown.Divider />
                                    
                                    <NavDropdown.Item href="#action/3.4">Medios de Pago</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#home">CONTACTO</Nav.Link>
                                </Nav>
                                    <Form inline className="serch" >
                                        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                                            <Button variant="outline-success">Buscar</Button>
                                    </Form>
                        </Navbar.Collapse>
                < CartWidget />

            </Navbar>
	        </header> 
        </div>
    )
}