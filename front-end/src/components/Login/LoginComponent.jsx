import React from 'react'
import { Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, CardLink } from 'reactstrap';
import './style.scss'

const LoginComponent = () => {
  return (
    <div className="form-login">
      <Row>
        <Col lg='7'>
          <Card>
            <CardBody>
              <h1>Login</h1>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <CardBody>
                  <Button>Đăng Nhập </Button>
                  <CardLink href="#">Chưa có tài khoản</CardLink>
                </CardBody>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default LoginComponent;