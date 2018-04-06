/**
 * Npm import
 */
import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import Particles from 'react-particles-js';

/**
 * Local import
 */

/**
 * Code
 */
const Header = () => (
  <header>
    <Particles
      params={{
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#399dff',
      },
      shape: {
        type: 'image',
        stroke: {
          width: 0,
          color: '#ff0000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: './images/anus.png',
          width: 640,
          height: 400,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#fff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      array: [],
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
      mouse: {},
    },
    retina_detect: true,
    tmp: {},
    }}
      style={{
        margin: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: 'url("/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
      }}
    />
    <Navbar collapseOnSelect fluid>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="http://forum.lshistories.eu/" target="_blank">
            Forum
          </NavItem>
          <NavItem eventKey={2} href="https://discord.gg/AqrVUCe" target="_blank">
            Discord
          </NavItem>
          <NavItem eventKey={2} href="samp://147.135.226.220:7777" target="_blank">
            SAMP
          </NavItem>
          <NavItem eventKey={2} href="http://panel.lshistories.eu/" target="_blank">
            Panel
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <img src="./images/test_blanc_v2.png" alt="" />
  </header>
);
/**
 * Export
 */
export default Header;
