import "./App.css";
import { useTheme } from "./context/theme/Theme";
import Dashboard from "./pages/Dasboard";
function App() {
  const { theme } = useTheme();
  return (
    <main className={` ${theme==="dark"?"dark":"light"}`}>
      <div className="dark:bg-black">

    <Dashboard/>
      </div>
    
    </main>
  );
}

export default App;
