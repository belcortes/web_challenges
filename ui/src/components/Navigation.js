import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="header">
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">WEB CHALLENGES</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem componentClass="span" eventKey={1}>
            <Link to="/begginer">Begginer</Link>
          </NavItem>
          <NavItem componentClass="span" eventKey={2}>
            <Link to="/intermediate">Intermediate</Link>
          </NavItem>
          <NavItem componentClass="span" eventKey={3}>
            <Link to="/advanced">Advanced</Link>
          </NavItem>
          <NavItem componentClass="span" eventKey={4}>
            <Link to="/proposal-submission">Submit a Proposal</Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
