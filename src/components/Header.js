import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ASRJC</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to='/rp'>
                            <Nav.Link><i className='fa-solid fa-ranking-star'></i>{'\t'}Rank Point Calculator</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header