import logo from './logo.svg';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
      </header>
    </div>
  );
}

export default App;
