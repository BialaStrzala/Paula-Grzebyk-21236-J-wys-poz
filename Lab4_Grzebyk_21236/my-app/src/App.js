import logo from './logo.svg';
import './App.css';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginStatus isLoggedIn={true}/>
        <LoginStatus isLoggedIn={false}/>
      </header>
    </div>
  );
}

export default App;
