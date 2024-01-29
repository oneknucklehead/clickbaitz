import { useEffect } from "react";
import './App.css';
import PageComponents from "./PageComponents";
import MetaPixel from "./utils/meta/metaPixel";

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
      <MetaPixel />
      <PageComponents />

    </div>
  );
}

export default App;
