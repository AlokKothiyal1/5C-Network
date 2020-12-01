import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Components/Routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
