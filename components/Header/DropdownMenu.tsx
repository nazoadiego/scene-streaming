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
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Sign Out</DropdownItem>
    </div>
  )
}

export default DropdownMenu
