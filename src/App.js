import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero imageSrc={travel_01} />
    </div>
  );
}

export default App;
