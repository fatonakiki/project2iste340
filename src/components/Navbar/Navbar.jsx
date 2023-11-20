import React from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link, Element, scroller } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
 
    return (
        <>
            <Header as='h2'>
            <Header.Subheader>
                    Golisano College of
                </Header.Subheader>
                Computing and Information Sciences
                
            </Header>
            <Menu inverted>
                <Menu.Item header><img src={logo} style={{ width: '30px'}} /></Menu.Item>
                {/* used Link for a smooth navigation on page */}
                <Link to="about" smooth={true} duration={500} offset={-50}>
                    <Menu.Item>About</Menu.Item>
                </Link>
                <Link to="degrees" smooth={true} duration={500} offset={-50}>
                    <Menu.Item>Degrees</Menu.Item>
                </Link>
                <Link to="minors" smooth={true} duration={500} offset={-50}>
                    <Menu.Item>Minors</Menu.Item>
                </Link>
                <Link to="employment" smooth={true} duration={500} offset={-50}>
                    <Menu.Item>Employment</Menu.Item>
                </Link>
                <Link to="people" smooth={true} duration={500} offset={-50}>
                    <Menu.Item>People</Menu.Item>
                </Link>
            </Menu>
        </>
    )
}

export default Navbar;