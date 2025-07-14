import React from 'react'
import DealsRow from './DealsRow';

export default function DealsTable({ deals }) {
  return (
          <div className="table-responsive">
            <table className="table mb-0 border">
              <thead className="table-header-custom">
                <tr>
                  <th scope="col" className="text-center" style={{ width: '50px' }}>
                      <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col" style={{ width: '350px' }}>DEAL NAME</th>
                  <th scope="col" style={{ width: '180px' }}>DEAL STAGE</th>
                  <th scope="col" style={{ width: '150px' }}>CLOSE DATE</th>
                  <th scope="col" style={{ width: '180px' }}>DEAL OWNER</th>
                  <th scope="col" style={{ width: '120px' }}>AMOUNT</th>
                  <th scope="col" className="text-center" style={{ width: '100px' }}>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal, index) => (
                  <DealsRow key={deal.id || index} deal={deal} />
                ))}
              </tbody>
            </table>
          </div>
      
  )
}
