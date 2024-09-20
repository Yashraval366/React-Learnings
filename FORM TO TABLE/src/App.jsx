import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import { Button, Container, Row, Col } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider, Link,} from 'react-router-dom';
import { DataProvider, useData } from './DataContext';
import './App.css';
import Details from './Details';


const router = createBrowserRouter(
  [
    {
    path: "/",
    element: <MainApp />,
    },
    {
      path: "/details",
      element: <Details />
    }
  ]
)


function MainApp() {

  const {submittedData, setsubmittedData}= useData();
  
  const [ FormValues, setFormValues] = useState({
    Name: "",
    Email: "",
    occupation: "",
    gender: "",
    languages: []
  })

  const [showbtn, setshowbtn] = useState(false)

  const handlesubmit = () => {
    setsubmittedData(prev => [...prev, FormValues])
    setshowbtn(true)
    setFormValues({ Name: "", Email: "", occupation: "", gender: "", languages: [] });
  }

  const handlechange = (event) => {

    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
    let copy = { ...FormValues };

    if (checked) {
      copy.languages.push(value);
    } else {
      copy.languages = copy.languages.filter(el => el !== value);
    }
      setFormValues(copy)
    }

    else{

      setFormValues(() => ({
      ...FormValues,
      [event.target.name]: event.target.value

    }))
    }
   
  }

  return (
    <>
      <div className='container-fluid bg-light p-5 m-0 vh-100'>
        <div className="shadow-lg p-3 mt-1 mb-3 bg-white rounded mx-auto" style={{ width: '35%', height: '540px' }}>
          <div className="mb-2 mt-1">
            <label htmlFor="Name" className="mb-1 fs-6">Name: </label>
            <input type="text" className="form-control" id="Name" placeholder="Name" name="Name" value={FormValues.Name} onChange={handlechange}/>
          </div>
          <div className="mb-2 mt-1">
            <label htmlFor="Email" className="mb-1 fs-6">Email: </label>
            <input type="Email" className="form-control" id="Email" placeholder="Email" name="Email" value={FormValues.Email} onChange={handlechange} />
          </div>
          <div className="mb-2 mt-1">
            <label htmlFor="occupation" className="form-label" >Select occupation</label>
            <select className="form-select" id="occupation" name='occupation' value={FormValues.occupation} onChange={handlechange}>
              <option value="" disabled>Select an option</option> 
              <option name="Student" value="Student">Student</option>
              <option name="Employee" value="Employee">Employee</option>
              <option name="other" value= "other" >other</option>
            </select>
          </div>
          <div className='form-group mt-3'>
            <h3 className='fs-6 '>Select gender</h3>
            <div className='mt-0 mb-0'>
              <input type='radio' name='gender' value='male' checked={FormValues.gender === 'male'} onChange={handlechange}/>
              <label htmlFor='male'>Male</label>
            </div>
            <div className='mb-3 mt-0'>
              <input type='radio' name='gender' value='female' checked={FormValues.gender === 'female'} onChange={handlechange}/>
              <label htmlFor='female'>Female</label>
            </div>
          </div>
          <div className='form-group mt-1'>
            <h3 className='fs-6'>Select Language</h3>
            <label className='form-label mb-0'><input type='checkbox' name="languages" value="html" checked={FormValues.languages.includes('html')} onChange={handlechange} />html</label><br/>
            <label className='form-label mb-0'><input type='checkbox' name="languages" value="css" checked={FormValues.languages.includes('css')} onChange={handlechange}/>CSS</label><br/>
            <label className='form-label mb-2'><input type='checkbox' name="languages" value="Javascript" checked={FormValues.languages.includes('Javascript')} onChange={handlechange}/>Javascript</label>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary mt-3"
              onClick={handlesubmit}
            >
              Submit
            </button>
            {showbtn && (<Link to="/details"><button className='btn btn-outline-primary mt-3 ms-3'>check details</button></Link>)}
          </div>
        </div>
      </div>       
    </>
  )
}

const App = () =>{
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App
