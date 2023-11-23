import AddMovie from './component/MovieAdd'
import MovieList from './component/MovieList'
import Filter from './component/Filter'

function App() {
  return (
    <div className="App">
      <Filter></Filter>
      <MovieList></MovieList>
     <AddMovie></AddMovie>
    </div>
  );
}

export default App;
