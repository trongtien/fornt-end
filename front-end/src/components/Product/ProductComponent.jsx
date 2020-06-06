import React from 'react'
import {
  Row, Col, Card, CardImg, CardBody, CardLink,
  CardTitle, CardSubtitle,
  Button
} from 'reactstrap';
import viewIcon from '../../assets/icon/eyes-icon.png'
import cartIcon from '../../assets/icon/cart-icon.png'
import './style.scss'

function ProductComponent() {
  return (
    <div className="product" style={{ marginTop: '10px' }}>
      <Row xs="4">
        <Col>
          <Card>
            <CardImg width="100%" src={viewIcon} alt="Card image cap" />
            <CardBody>
              <CardTitle>Tên sản phẩm</CardTitle>

              <CardSubtitle>2.000.000</CardSubtitle>
              <CardSubtitle>2.000.000</CardSubtitle>


            </CardBody>
            <CardBody className="card-footer">
              <div className="card-link">
                <CardLink href="#"><img src={viewIcon} /></CardLink>
                <CardLink style={{ borderRight: '1px solid #333333' }}></CardLink>
                <CardLink href="#"><img src={cartIcon} /></CardLink>
              </div>
            </CardBody>
          </Card>
        </Col>


      </Row>
      <Row xs="12" className="toggle-product">
        <Col >
          <Button color="primary">Xem Thêm</Button>
        </Col>
      </Row>
    </div>
  )
}

export default ProductComponent;