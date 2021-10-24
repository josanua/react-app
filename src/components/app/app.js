import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

function App() {
  
  const data = [
    {name: 'John C.', salary: 500, inc: 'false' },
    { name: 'Alex M.', salary: 3000, inc: 'false' },
    { name: 'Carl W.', salary: 5000, inc: 'false' },
  ];
  
  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployersList data={data} />
      <EmployersAddForm/>
    </div>
  );
}

export default App;