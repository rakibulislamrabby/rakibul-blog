import "./App.css";
import Articles from "./components/Articles/Articles";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Articles></Articles>
    </>
  );
}

export default App;
