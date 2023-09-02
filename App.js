import logo from './logo.svg';
import './App.css';
import HelloWorld from './Helloworld';
import FruitsArray from './FruitsArray'
import ArrayObj from './ArrayObj';
import Changecolor from './Changecolor';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
      {/*<HelloWorld/>*/}
      {/*<FruitsArray/>*/}
      {/*<ArrayObj/>*/}
      {/*<Changecolor/>*/}
      <Counter/>
    </div>
  );
}

export default App;
