import './App.css';
import MainComponent from './components/mainComponent'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter />
        <MainComponent />
    </div>
  );
}

export default App;
