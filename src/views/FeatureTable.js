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

function FeatureTable() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Feature Table </Card.Title>
                <p className="card-category">
                  Here is a detail of a feature table.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Oc_Scope</th>
                      <th className="border-0">Web Participants</th>
                      <th className="border-0">Video Participants</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>premium plus</td>
                      <td>75</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>pro</td>
                      <td>100</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>enterprise</td>
                      <td>200</td>
                      <td>35</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>lite</td>
                      <td>100</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>freemium</td>
                      <td>25</td>
                      <td>5</td>
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

export default FeatureTable;
