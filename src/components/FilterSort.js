import React from 'react';
import '../App.css'; // Importa el archivo CSS aquí

const FilterSort = ({ handleFilter, handleSort }) => {
    return (
        <div className="row headersort p-4">
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="userId">User ID:</label>
                    <input type="number" className="form-control" id="userId" onChange={e => handleFilter('userId', e.target.value)} />
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="sortTitle">Ordenar por título:</label>
                    <select className="form-control" id="sortTitle" onChange={e => handleSort('title', e.target.value)}>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </div>
            </div>
            <div className="col-md-4">
                <div className="form-group">
                    <label htmlFor="filterBody">Filtrar por texto del body:</label>
                    <input type="text" className="form-control" id="filterBody" onChange={e => handleFilter('body', e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default FilterSort;
