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

function Users() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Users Table </Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">username</th>
                      <th className="border-0">email address</th>
                      <th className="border-0">oc_scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>rishank</td>
                      <td>rishank@hdmeet.com</td>
                      <td>lite</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>atul</td>
                      <td>atul@hdmeet.com</td>
                      <td>pro</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>admin</td>
                      <td>admin@hdmeet.com</td>
                      <td>enterprise</td>
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

export default Users;
