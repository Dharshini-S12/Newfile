import './App.css';
import Banner1 from './Components/Banner';
import HouseList from './Components/HouseList';
function App() {
  return (
    <div className="App">
      <Banner1 heading="Providing Houses all over the World"></Banner1>
      <HouseList/>
    </div>
  );
}

export default App;
