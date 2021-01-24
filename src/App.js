import './App.css';
import MainComponent from './components/mainComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-component">
          <MainComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
