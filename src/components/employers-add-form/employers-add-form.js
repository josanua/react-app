import './employers-add-form.css';

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Adauga colaborator nou</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Cum il cheama?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salariul in $?" />

                <button type="submit"
                        className="btn btn-outline-light">Adauga</button>
            </form>
        </div>
    )
}

export default EmployersAddForm;