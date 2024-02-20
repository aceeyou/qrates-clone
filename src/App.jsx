import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="bg-[#f7f7f7] h-full">
      <header className="bg-[#fff] px-[30px] py-[22px]">
        <Navigation />
      </header>
      <h1 className="text-blue-600">hello world</h1>
    </div>
  );
}

export default App;
