import React,{useState} from 'react'
import Validation from './Validation'
import { useNavigate } from 'react-router-dom'
import "./login.css"



const Login = () => {
  const navigate = useNavigate();
  const [values,setValues]=useState({
    name:"",
    password:""
  })

  const [errors,setErrors]=useState({})

  function handleChange(e){
     setValues({...values,[e.target.name]:e.target.value})
  }



     

  function handleSubmit(e){
    e.preventDefault()
    const validationErrors = Validation(values);
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      navigate("/Film");
    }
  }

  
  return (
    <div >

          <div className='lock'>
          <div className='content'>
            <form onSubmit={handleSubmit}>

            <div className='email-input'>
              <div className='label'>
              <input type="text" placeholder='Email' name="name" value={values.name} onChange={handleChange} className='input-email' />
              {errors && <p style={{color:"red", fontSize:"15px"}}>{errors.name}</p>}

              </div>

            </div>

              <div className='password-input'>
                <input type="password" placeholder='password' name="password" value={values.password}  onChange={handleChange} className='input-password' />
                {errors && <p style={{color:"red", fontSize:"15px"}}>{errors.password}</p>}
              </div>
              <div className='log-content'>
                 <button className='log-btn' type="submit">LOGIN</button>
              </div>

            </form>

          </div>

          </div>

        

    </div>
  )
}

export default Login

