import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ForgetPassword() {
    const [errorMsg,setErrorMsg]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const navigate = useNavigate()
  
  
    

    const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
        initialValues:{
          email: "",
          
          
           },
           onSubmit: async()=>{
            setErrorMsg('')
            try {
              setIsLoading(true)
              
               const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values)
               if (data.statusMsg == 'success') {

     toast.success(data.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
          navigate('/resetPassword')
               }



            
            console.log(data)
            
            } catch (error) {
            setErrorMsg(error.message)
              
            }
            setIsLoading(false)
           }
        })
        
        return (<>
          <div className=' '> 
            <h1  className ='text-start '>Reset Password:</h1>
            <form onSubmit={handleSubmit}  >
        <div className="form-row">
        
          <div className="form-group ">
            <label htmlFor="inputEmail4">Email:</label>
            <input name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" className="form-control " id="inputEmail4" placeholder="Enter your Email" />
            {errors.email && touched.email&& <p className='alert alert-danger mt-2 '>{errors.email}</p> }
          </div>
          
        </div>

      
        {errorMsg && <p className=' alert alert-danger mt-2'>{errorMsg}</p>} 
        
        <div className='w-100 d-flex justify-content-end' >
          { isLoading ?   <button type="submit" className="btn btn-success my-2  me-2  "><i className="fa-solid fa-spinner fa-spin px-3"></i></button>
          :
          <button type="submit" disabled={!isValid} className="btn btn-success my-2  me-2 ">Reset Password</button>
        }
      
        </div>
      </form>
          </div>
          </>
        )
      
      
      
    
    }

