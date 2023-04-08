import { useEffect } from "react";
import './App.css';
import PageComponents from "./PageComponents";

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  return (
    <div className="App">
      {/* <Navbar /> */}
      <PageComponents />

    </div>
  );
}

export default App;
