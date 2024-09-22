import React from 'react'
import { useData } from './DataContext';


function Details() {


  const {submittedData} = useData();

  return (
    <>
      <div
        className="container-fluid d-flex shadow-lg p-3 mt-4 mb-3 bg-white rounded align-items-center justify-content-center"
        style={{ width: '90%', maxWidth: '570px', height: 'auto' }}
      >
        <div className="table-responsive w-100">
          <table className="table table-bordered table-hover mx-auto">
            <thead className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Occupation</th>
                <th scope="col">Gender</th>
                <th scope="col">Languages</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.occupation || 'N/A'}</td>
                  <td>{data.gender}</td>
                  <td>{data.languages.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Details
