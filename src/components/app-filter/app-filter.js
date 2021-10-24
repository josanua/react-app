import './app-filter.css';

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button
        className="btn btn-light"
        type="button">
        Toti colaboratorii
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
        Pentru promovare
      </button>
      <button
        className="btn btn-outline-light"
        type="button">
        Salariu mai mare de 1000$
      </button>
    </div>
  )
}

export default AppFilter;