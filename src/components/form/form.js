import React from 'react';
import './form.css';

const form = ({ handleSubmit, handleChanges, handleBlur, supportersCount, formValues, formErrors, formTouched }) => {

    return (
        <div className="Form">
            <h3 className="text-center">Assine pela vacinação nos centros de saúde.</h3>
            <h1 className="text-center">
                <span className="badge badge-warning" id="contador">{supportersCount}</span>
            </h1>
            <p className="text-center">pessoas já assinaram pela vacinação nos cs</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="name" placeholder="Nome"
                        value={formValues.name}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>
                {formTouched.name && formErrors.name && <span className="error text-left">{formErrors.name}</span>}
                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="surname" placeholder="Sobrenome"
                        value={formValues.surname}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>
                {formTouched.surname && formErrors.surname && <span className="error">{formErrors.surname}</span>}
                <div className="form-group mb-2">
                    <input type="email" className="form-control" id="email" placeholder="E-mail"
                        value={formValues.email}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>
                {formTouched.email && formErrors.email && <span className="error">{formErrors.email}</span>}

                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="phone" placeholder="(99) 9999-9999 opcional"
                        value={formValues.phone}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>
                {formTouched.phone && formErrors.phone && <span className="error">{formErrors.phone}</span>}

                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="neighborhood" placeholder="Bairro"
                        value={formValues.neighborhood}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>

                <div className="form-group mb-2">
                    <input type="text" className="form-control" id="comment" placeholder="Comentário opcional"
                        value={formValues.comment}
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                </div>
                {formErrors.general && <p className="error">{formErrors.general}</p>}
                <input type="submit" value="Enviar" className="btn btn-warning" />
            </form>
            <br />
        </div>
    );
}

export default form;