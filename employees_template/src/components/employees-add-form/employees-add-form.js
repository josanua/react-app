import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Adaugati colaborator nou.</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Numele?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salariu in $?" />

                <button type="submit"
                        className="btn btn-outline-light">Adauga</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;