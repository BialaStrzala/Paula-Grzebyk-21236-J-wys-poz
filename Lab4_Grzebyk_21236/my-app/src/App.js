import logo from './logo.svg';
import './App.css';
import InputTracker from './InputTracker';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList todos={["Kup mleko","Kup płatki","Kup chleb"]}/>
      </header>
    </div>
  );
}

export default App;
