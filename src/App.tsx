import { useState, useEffect } from "react";
import "./styles/global.scss";
import { Header } from "./components";
import { Home } from "./pages";

function App() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <p>Loading</p>}
      <div className="app-container darkMode">
        <Header hasScrolledDown={hasScrolledDown} />
        <Home hasScrolledDown={hasScrolledDown} />
      </div>
    </>
  );
}

export default App;
