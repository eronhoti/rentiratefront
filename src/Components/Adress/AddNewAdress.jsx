
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import * as Yup from 'yup'
import { LoggedUserAdressContext } from '../../Contexts/getLoggedUserAdress/GetLoggedUserAdress'
import { UpdateUserDataContext } from '../../Contexts/UpdateUserData/UpdateUserData'
import { toast } from 'react-toastify'
import UserAdress from './UserAdress'

export default function AddNewAdress() {
  
  const[[name, setName],[phone, setPhone],[email, setEmail]]=useContext(UpdateUserDataContext)
  const[details,setDetails]=useState(localStorage.getItem('deatils'))
  const[city,setCity]=useState(localStorage.getItem('city'))
  const[newAdress,setNewAdress]=useState([])

 
  async function UpdateLogedUserAdress() {

    let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/addresses',{
      name : name,
      details : details,
      phone: phone,
      city: city,
      

  },{headers:{token:localStorage.getItem('token')

}})
  console.log(data)
  setNewAdress(data.data)
  if (data.status=='success') {

      toast.success('Your adress have been update successfully', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          });
      
  }
  
 
  
}useEffect(()=>{
    UpdateLogedUserAdress() 
  },[])
  

  return (<>
   <div className='w-75 m-auto my-5' >
   <button type="button" className="btn btn-danger  mt-5 text-white me-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="toka">Add new adress adress</button>

    <UserAdress/>
   
     
    

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update my Profile</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">name:</label>
            <input type="text" className="form-control" id="recipient-name"  value={name}
                    onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Details:</label>
            <input type="text" className="form-control" id="recipient-name"  value={details}
                    onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="recipient-phone" className="col-form-label">phone:</label>
            <input type="text" className="form-control" id="recipient-phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="recipient-state" className="col-form-label">city:</label>
            <input type="text" className="form-control" id="recipient-state" value={city}
                    onChange={(e) => setEmail(e.target.value)} />
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={()=>{UpdateLogedUserAdress()}} className="btn btn-sucess bg-main text-white ">Update</button>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
  
}
