import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Loading from "./components/Loading"

export default function App() {
  const [hash, setHash] = useState("");
  console.log(hash);
  return (
    <div>
      <Navbar/>
      <Hero setHash={setHash}/>
    </div>
  )
}