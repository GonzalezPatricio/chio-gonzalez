import React from "react";
import "../navbar/navbar.css";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'; 
import CartWidget from "../cartWidget/CartWidget";


export default function NavBar() {
    return(
        <div>
            <header className="header">
            <Navbar bg="white" expand="lg" className="navbar">
                <Navbar.Brand href="#home" className="brand">CHIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">HOME</Nav.Link>
                                    <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Equipos</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Hardware</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Perifericos</NavDropdown.Item>
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