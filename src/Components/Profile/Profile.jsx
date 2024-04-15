import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UpdateProfile from './UpdateProfile'
import { UpdateUserDataContext } from '../../Contexts/UpdateUserData/UpdateUserData'
import user from '../../Assets/Images/istockphoto-1495088043-612x612.jpg'
import {Helmet} from "react-helmet";

export default function Profile() {
    const[[name, setName],[phone, setPhone],[email, setEmail]]=useContext(UpdateUserDataContext)

   console.log(name)

  return (<>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Rentirate || Profile</title>
                
            </Helmet>
            
        
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src={user}/>
                <span className='fw-bolder'>{name}</span>
                <span className="text-black-">{email}</span><span> </span>
        
      


		<div class="recent-border mt-4">
			<Link to={'/allOrders'} class="wishlist"><span class="recent-orders">Recent orders</span></Link>
		</div>
		<div class="wishlist-border pt-2">
			<Link to={'/wishList'} class="wishlist" ><span class="wishlist recent-border ps-2"> My Wishlist </span></Link>
		</div>
		
		
	

</div></div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile </h4>
                </div>
                
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value={phone}/></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address " value={localStorage.getItem('details')}/></div>
                 </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value={localStorage.getItem('city')} placeholder="state"/></div>
                </div>
               <button type="button" className="btn btn-sucess bg-main mt-5 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="toka">Update my profile</button>
               <UpdateProfile/>

               
            </div>
        </div>
        
    </div>
</div>

  </>)
}
