import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Collapse,
  InputGroup, InputGroupText, InputGroupAddon, Input
} from 'reactstrap';

HeaderComponent.propTypes = {
  onClickLogin: PropTypes.func
}
HeaderComponent.defaultProps = {
  onClickLogin: null
}
function HeaderComponent(props) {
  const { onClickLogin } = props;

  function handlClick() {
    if (onClickLogin) {
      onClickLogin();
    }
  }

  return (
    <header className="header">
      <Navbar light expand="md">
        <NavbarBrand href="#" className="text-logo">FruitShop</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              {/* <NavLink to="/">Trang Chủ</NavLink> */}
              <Link className="nav-link" to="/">Trang Chủ</Link>
            </NavItem>
            <NavItem>
              {/* <NavLink to="/Introduction">Giới thiệu</NavLink> */}
              <Link className="nav-link" to="/Introduction">Giới thiệu</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <InputGroupText>To !</InputGroupText>
            </InputGroupAddon>
          </InputGroup>

          <NavbarText onClick={() => handlClick()} > Đăng Nhập </NavbarText>
          <NavbarText to="/register"> Đăng Ký </NavbarText>
          <NavbarText>Giỏ Hàng</NavbarText>
        </Collapse>
      </Navbar>
    </header >

  )
}

export default HeaderComponent;