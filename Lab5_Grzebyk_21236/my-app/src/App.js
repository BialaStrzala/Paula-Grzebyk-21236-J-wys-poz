import logo from './logo.svg';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserList />
      </header>
    </div>
  );
}

export default App;
