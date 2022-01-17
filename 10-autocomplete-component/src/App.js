import './App.css';
import AutoComplete from './components/AutoComplete';
import fruits from './data';

function App() {
  console.log(fruits);
  // fetch(
  //   'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit5&sort=name&namePrefix=nitra',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
  //       'x-rapidapi-key': '410bc7be64msh317ad5ef6df6de4p1e8826jsnb5f0caa74b44',
  //     },
  //   }
  // )
  //   .then(response => {
  //     console.log(response.json());
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });

  return (
    <div className="container">
      <AutoComplete options={fruits} />
    </div>
  );
}

export default App;
