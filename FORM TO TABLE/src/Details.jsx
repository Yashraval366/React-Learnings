import React from 'react'
import { useData } from './DataContext';


function Details() {


  const {submittedData} = useData();

  return (
    <>
      <div className='shadow-lg p-3 mt-4 mb-3 bg-white rounded mx-auto' style={{ width: '40%', height: '300px' }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">occupation</th>
              <th scope="col">gender</th>
              <th scope="col">languages</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{index +1}</td>
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
    </>
  )
}

export default Details
