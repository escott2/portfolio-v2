import "../../../styles/global.scss";
import { useContext } from "react";
import { ThemeContext } from "../../../store";

interface AppContainerProps {
  children: React.ReactNode;
}

function AppContainer({ children }: AppContainerProps) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`app-container ${isDarkMode && "darkMode"}`}>
      {children}
    </div>
  );
}

export default AppContainer;
