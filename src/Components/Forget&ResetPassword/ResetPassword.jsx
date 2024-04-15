import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

export default function ResetPassword() {
    const [errorMsg,setErrorMsg]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        resetCode: Yup.string().required('Code is required').matches(/^[0-9]{6,6}$/,'Invalid  code'),
      
        })
  
  
    

    const{values,handleChange,handleBlur,handleSubmit,errors,touched,isValid}=useFormik({
        initialValues:{
            resetCode: "",
          
           },
           onSubmit: async()=>{
            setErrorMsg('')
            try {
              setIsLoading(true)
              
               const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',values)
               if (data.status== 'Success' ) {

            toast.success(data.message||'Your code is sucessfuly verified', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
          navigate('/newPasswordAfterReset') }
          

            console.log(data.status)
            
            } catch (error) {
            setErrorMsg(error.message)
              
            }
            setIsLoading(false)
           },
           validationSchema
        })
        
        return (<>
          <div className=' '> 
            <h1  className ='text-start '>Reset Password:</h1>
            <form onSubmit={handleSubmit}   >
        <div className="form-row ">
        
        <div className="form-group ">
            <label htmlFor="inputCode">Code:</label>
            <input name="resetCode" onChange={handleChange} onBlur={handleBlur} value={values.resetCode}  type="text" className="form-control " id="inputCode" placeholder="Enter your Code" />
            {errors.resetCode && touched.resetCode&& <p className='alert alert-danger mt-2 '>{errors.resetCode}</p> }
          </div>
          
        </div>

      
        {errorMsg && <p className=' alert alert-danger mt-2'>{errorMsg}</p>} 
        
        <div className='w-100 d-flex justify-content-end' >
          { isLoading ?   <button type="submit" className="btn btn-success my-2  me-2  "><i className="fa-solid fa-spinner fa-spin px-3"></i></button>
          :
          <button type="submit" disabled={!isValid} className="btn btn-success my-2  me-2 ">Submit code</button>
        }
      
        </div>
      </form>
          </div>
          </>
        )
      
      
      
    
    }


