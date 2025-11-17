import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickCounter/>
        <PrimeCalculator/>
      </header>
    </div>
  );
}

export default App;
