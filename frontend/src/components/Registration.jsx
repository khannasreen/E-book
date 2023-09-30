import React from 'react';
import logo from '../images/mylogo.png';
import { useFormik } from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object().shape({
  name: yup.string().min(4, 'characters minimum required').required('Name is Required'),
  email: yup.string().email('Please Enter Valid Mail').required('Email is required'),
  phone: yup.string(10, 'Phone number should not be more than 10 digit ').required('Phone Number is required'),
  password: yup.string().min(4, 'Password should be minium 6 character').max(8, 'password should not be more 8 character').required('Phone Number is required'),
  file: yup.string().required('upload file')
});


const Registration = () => {
  const registrationForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      file: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: signupSchema,
  })

  return (
    <div>
      <div className='col-md-4 mx-auto my-5 ' >
        <div className="card-body shadow border rounded-2">
          <div className="card px-4 py-4">
            <img src={logo} alt="" />
            <h2 className='text-center blueclass text-white my-3 py-1 rounded-1 registrationtext'>Registration Form</h2>
            <form onSubmit={registrationForm.handleSubmit}>
              <label className="labelfont">Name</label>
              <span style={{ fontSize: '0.7em', color: 'red', marginLeft: 20 }}>
                {registrationForm.touched.name && registrationForm.errors.name}</span>
              <input type='text' className='form-control mb-4' name='name' autoComplete='off' placeholder='Your Name'
                onChange={registrationForm.handleChange}
                value={registrationForm.values.name}
              />
              <label className="labelfont">E-mail</label>
              <span style={{ fontSize: '0.7em', color: 'red', marginLeft: 20 }}>
              {registrationForm.touched.email && registrationForm.errors.email}</span>
              <input type='email' className='form-control mb-4' name='email' autoComplete='off' placeholder='Enter Your Email'
                onChange={registrationForm.handleChange}
                value={registrationForm.values.email}
              />
              <label className="labelfont">Phone Number</label>
              <span style={{ fontSize: '0.7em', color: 'red', marginLeft: 20 }}>
              {registrationForm.touched.phone && registrationForm.errors.phone}</span>
              <input type='number' className='form-control mb-4' name='phone' autoComplete='off' placeholder='Enter Your Number'
                onChange={registrationForm.handleChange}
                value={registrationForm.values.phone}
              />
              <label className="labelfont">Password</label>
              <span style={{ fontSize: '0.7em', color: 'red', marginLeft: 20 }}>
              {registrationForm.touched.password && registrationForm.errors.password}</span>
              <input type='password' className='form-control mb-4' name='password' autoComplete='off' placeholder='Enter Your Password'
                onChange={registrationForm.handleChange}
                value={registrationForm.values.password}
              />
              <div className="mb-3">
                <label className="form-label labelfont">Choose your file</label>
                <span style={{ fontSize: '0.7em', color: 'red', marginLeft: 20 }}>
                {registrationForm.touched.file && registrationForm.errors.file}</span>
                <input className="form-control" type="file" id="formFile" name='file'
                  onChange={registrationForm.handleChange}
                  value={registrationForm.values.file}
                />
              </div>
              <button type='submit' className='btn blueclass w-100 text-white my-2 '>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
