import './App.css';
import AutoComplete from './components/AutoComplete';
import fruits from './data';

function App() {
  return (
    <div className="container">
      <AutoComplete options={fruits} />
    </div>
  );
}

export default App;
