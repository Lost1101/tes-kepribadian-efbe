import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Loading from "./components/Loading"
import Result from "./components/Result"

export default function App() {
  const [hash, setHash] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div>
      <Navbar />
      { !hash 
        ? <Hero setHash={setHash} />
        : !showResult 
          ? <Loading /> 
          : <Result hash={hash} setHash={setHash} setShowResult={setShowResult}/> 
      }
    </div>
  );
}