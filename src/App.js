import './App.css';
import Current_Weather from './components/current-Weather/Current_Weather';
import Search from './components/Search/Search';

function App() {
  const handeOnSearchChange = (searchData) =>{
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handeOnSearchChange}/>
      <Current_Weather/>
    </div>
  );
}

export default App;
