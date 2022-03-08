import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './navbarcomponent.css'

export const NavbarComponent = () => {
    return (

        <Navbar bg='myRed' variant='light' fixed='top' expand='sm' collapseOnSelect>
            <Container>
                <Navbar.Brand >
                    <Nav.Item>
                        <Nav.Link href='/mikrobusostrava'>
                            Mikrobus a Minibus Ostrava
                        </Nav.Link>
                    </Nav.Item>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='col justify-content-end'>
                        <Nav.Item>
                            <Nav.Link href='#content'>Nabízíme</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#fotogalerie'>Fotogalerie</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#kontakty'>Kontakty</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}




