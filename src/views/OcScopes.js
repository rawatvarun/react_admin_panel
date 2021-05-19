import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function OcScopes() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">OcScopes Table </Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>premium plus</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>pro</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>enterprise</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>lite</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>freemium</td>
                    </tr>                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default OcScopes;
