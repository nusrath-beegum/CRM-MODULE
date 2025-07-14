import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function DealsRow({ deal }) {
  const navigate = useNavigate();
  const { id, name, stage, closeDate, owner, amount } = deal;
  return (
    <tr className="align-middle">
      <td className="text-center">
        <input className="form-check-input" type="checkbox" />
      </td>
      <td className="text-dark" style={{ minWidth: 160 }}>
        {name}
      </td>
      <td className="text-secondary">{stage}</td>
      <td className="text-secondary">{closeDate}</td>
      <td className="text-secondary">{owner}</td>
      <td className="text-secondary">{amount}</td>
      <td className="text-center">
        <div className="d-flex justify-content-center gap-2">
          
          <button
            className="btn btn-sm btn-light border"
            title="View"
            style={{ color: 'green' }}
            onClick={() => navigate(`/deals/${id}`)}
          >
            <i className="bi bi-eye"></i>
          </button>
          
          <button className="btn btn-sm btn-light border" title="Edit" style={{ color: 'blue' }}>
            <i className="bi bi-pencil-fill"></i>
          </button>
          
          <button className="btn btn-sm btn-light border" title="Delete" style={{ color: 'red' }}>
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </td>
    </tr>
  );
}


