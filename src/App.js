
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="h-screen flex justify-center text-gray-300 bg-gray-950 ">
      <div className="mx-auto mt-8 mx-2">
        <h1 className="text-3xl text-emerald-600 font-bold text-center">
          Pokemon Top Trumps
        </h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
