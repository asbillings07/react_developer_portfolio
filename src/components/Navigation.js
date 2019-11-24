import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'

export const Navigation = () => (
  <NavDiv>
    <NavBar collapseOnSelect expand='lg'>
      <NavBarTitle aria-label='Nav Title is Aaron Billings' href='/'>
        Aaron Billings
      </NavBarTitle>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <>
          <Nav className='mr-auto' />
          <Nav>
            <NavLink
              aria-label='This link displays the about page'
              href='/about'
            >
              About
            </NavLink>
            <NavLink
              aria-label='This link displays the project page'
              href='/projects'
            >
              Projects
            </NavLink>
          </Nav>
        </>
      </Navbar.Collapse>
    </NavBar>
  </NavDiv>
)

const NavDiv = styled.div`
  margin-bottom: 0px;
`
const NavBar = styled(Navbar)`
  background-color: #207efc !important;
`
const NavBarTitle = styled(NavBar.Brand)`
  color: white !important;
`
const NavLink = styled(Nav.Link)`
  color: ${props => (props.user ? 'black' : 'white')} !important;
`
