const Header = () => {
  return (
    <div className="flex items-center justify-between ">
      <nav className="inline-flex list-none gap-8">
        <li>Home</li>
        <li>NavItem</li>
        <li>NavItem</li>
        <li>NavItem</li>
      </nav>

      <div className="inline-flex gap-4">
        <div>Searchbar</div>
        <div>Profile</div>
      </div>
    </div>
  )
}

export default Header
