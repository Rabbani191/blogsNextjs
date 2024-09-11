"use client"
import { useState } from "react"
const SearchBar = ({}) => {
const [search, setSearch] = useState("Type Here");
  return <>
   <p>{search}</p>
   <input type="text" value = {search} onChange={(e)=>setSearch(e.target.value)}/>
  </>
}

export default SearchBar