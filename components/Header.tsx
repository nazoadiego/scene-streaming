const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <nav>
        <ul className="inline-flex list-none gap-8 tracking-wider">
          <li>Home</li>
          <li>NavItem</li>
          <li>NavItem</li>
          <li>NavItem</li>
        </ul>
      </nav>

      <div className="inline-flex gap-4 tracking-wider">
        <div>Searchbar</div>
        <div>Profile</div>
      </div>
    </header>
  )
}

export default Header
