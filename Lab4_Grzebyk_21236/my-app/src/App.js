import logo from './logo.svg';
import './App.css';
import HelloWithProps from './HelloWithProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWithProps name="Paula"/>
        <HelloWithProps name="Ewa"/>
        <HelloWithProps name="Adam"/>
      </header>
    </div>
  );
}

export default App;
