import gsap from "gsap";
import "./App.css";
import Indicators from "./components/Indicators";
import Pages from "./components/Pages/Pages";

gsap.registerPlugin();
function App() {
  return (
    <div>
      <Indicators></Indicators>
      <Pages></Pages>
    </div>
  );
}

export default App;
