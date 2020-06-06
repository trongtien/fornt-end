import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import ListCardComponent from '../components/ListCard/ListCardComponent'
import ListBillComponent from '../components/ListBill/ListBillComponent'


function CardPages(props) {
  return (
    <Container fluid={true}>
      <Row style={{ marginTop: '3%', marginBottom: '3%', padding: "15px" }}>
        <Col lg='8'> <ListCardComponent /></Col>
        <Col lg='4'><ListBillComponent /></Col>
      </Row>
    </Container>
  )
}
export default CardPages