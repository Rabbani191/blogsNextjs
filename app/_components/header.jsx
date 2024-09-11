
import Link from "next/link"
import SearchBar from "./searchBar"


const Header = ({}) => {
  return <header>
    <h3>Header</h3>
    <Link href="/">Home Page </Link>
    <Link href="/blog">Blogs</Link>
    {/* <SearchBar/> */}
  </header>
  
}

export default Header