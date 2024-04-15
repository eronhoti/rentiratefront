import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { UpdateUserDataContext } from '../../Contexts/UpdateUserData/UpdateUserData';

export default function UpdateProfile() {
    const[[name, setName],[phone, setPhone],[email, setEmail]]=useContext(UpdateUserDataContext)

    
    async function updateLogedUserData() {
      
        let {data}= await axios.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',{
            name : name,
            email: email,
            phone: phone,
        },{headers:{token:localStorage.getItem('token')
      
    }})
        console.log(data)
        if (data.message=='success') {
       setName(data.user.name);
          localStorage.setItem('name',name);
       setName(data.user.email);
          localStorage.setItem('email',email);
       setName(data.user.phone);
          localStorage.setItem('phone',phone);
            toast.success('Your data have been update successfully', {
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
       
        
      }
      


  return (<>

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
            <label for="recipient-phone" className="col-form-label">phone:</label>
            <input type="text" className="form-control" id="recipient-phone" value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="recipient-state" className="col-form-label">email:</label>
            <input type="text" className="form-control" id="recipient-state" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
          </div>
          
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={()=>{updateLogedUserData()}} className="btn btn-sucess bg-main text-white ">Update</button>
      </div>
    </div>
  </div>
</div>

</>  )
}
