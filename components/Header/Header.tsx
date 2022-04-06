import Link from 'next/link'
import DropdownButton from './DropdownButton'
import DropdownMenu from './DropdownMenu'
import Navbar from './Navbar'
import NavItem from './NavItem'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavItem>
          <Link href="/" passHref>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/browse" passHref>
            Browse
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/list">Lists</Link>
        </NavItem>
        <NavItem>
          <SearchBar />
        </NavItem>

        <DropdownButton icon="😊">
          <DropdownMenu />
        </DropdownButton>
      </Navbar>
    </header>
  )
}

export default Header
