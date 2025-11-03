import logo from './logo.svg';
import './App.css';
import ShowImage from './ShowImage';
import HandleClick from './HandleClick';
import HandleMouseOver from './HandleMouseOver';
import LoadDataFromJson from './loadDataFromJson';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HandleClick />
        <HandleMouseOver />
        <ShowImage />
        <LoadDataFromJson />
      </header>
    </div>
  );
}

export default App;
