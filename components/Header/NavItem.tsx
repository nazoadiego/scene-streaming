const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="mr-2 tracking-widest">
        {props.children}
      </a>
    </li>
  )
}

export default NavItem
