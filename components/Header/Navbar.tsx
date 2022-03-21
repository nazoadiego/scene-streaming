const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav tracking-wider">{props.children}</ul>
    </nav>
  )
}

export default Navbar
