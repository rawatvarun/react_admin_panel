import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/admin" >
                  Home
                </a>
              </li>
              <li>
                <a href="/" >
                  Company
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              TelWare Corporation. All rights reserved.
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
