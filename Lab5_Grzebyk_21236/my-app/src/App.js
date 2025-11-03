import logo from './logo.svg';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreDisplay score={10}/>
        <ScoreDisplay score={50}/>
        <ScoreDisplay score={80}/>
      </header>
    </div>
  );
}

export default App;
