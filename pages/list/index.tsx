import { useState } from 'react'
import Layout from '../../components/Layout'

const ListPage = () => {
  return (
    <Layout>
      <ProfileNav>
        <NavItem icon="😊" />
        <NavItem icon="😊" />
        <NavItem icon="😊" />

        <NavItem icon="😊">
          <DropdownMenu />
        </NavItem>
      </ProfileNav>
    </Layout>
  )
}

const ProfileNav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  )
}

const NavItem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

const DropdownMenu = () => {
  function DropdownItem(props) {
    return (
      <a href="" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>

        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem></DropdownItem>
      <DropdownItem></DropdownItem>
    </div>
  )
}

export default ListPage
