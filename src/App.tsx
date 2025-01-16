import { useState, useEffect } from "react";
import { Header, AppContainer } from "./components";
import { Home } from "./pages";
import { ThemeContextProvider } from "./store";

function App() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    });
  }, []);

  return (
    <>
      <ThemeContextProvider>
        <AppContainer>
          <Header hasScrolledDown={hasScrolledDown} />
          <Home hasScrolledDown={hasScrolledDown} />
        </AppContainer>
      </ThemeContextProvider>
    </>
  );
}

export default App;
