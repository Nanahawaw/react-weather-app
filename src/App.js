import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4">
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}

export default App;
