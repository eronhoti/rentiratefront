import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Contexts/AuthContext/AuthContext'
import { CartContext } from '../../Contexts/CartContext/CartContext'
import { wishListContext } from '../../Contexts/WishListContext/WishListContext'



export default function Navbar() {
  const{isUserLogged,setisUserLogged}= useContext(AuthContext)
  const{noOfCartIteams,setNoOfCartIteams}=useContext(CartContext)
   localStorage.setItem('intailNoOfCartIteams',noOfCartIteams||0)
  const{noOfWishListIteams,setNoOfWishListIteams}=useContext(wishListContext)
   localStorage.setItem('intialNoOfWishListIteams',noOfWishListIteams||0)
  
  const navigate =useNavigate()


  

   function signOut() {
    setisUserLogged(false)
    localStorage.removeItem('token')
    navigate('/login')
   }


  return (<>
  <div className='mb-5' >
    <nav className="navbar navbar-expand-lg fixed-top mb-5 ">
<div className="container">
  
  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {isUserLogged && 
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link " aria-current="page" to={'/home'}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/products'}>Products</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/categories'}>Categories</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/brands'}>Brands</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/allorders'}>My orders</NavLink>
      </li>
     
        
    </ul> }
    
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    {isUserLogged&&
    <>
     <li className="nav-item">
     <NavLink className="nav-link" to={'/profile'}>
     <i class="fa-solid fa-user fa-lg "></i></NavLink>
   </li>
     <li className="nav-item">
     <NavLink className="nav-link" to={'/wishlist'}>
     <div className='position-relative ' >
      <i className= "fas fa-heart ms-auto fs-5 ">
      <span className='bg-main position-absolute top-0 start-100 translate-middle number rounded-circle d-flex justify-content-center align-items-center'>{noOfWishListIteams || localStorage.getItem('intialNoOfWishListIteams')}</span>

        </i></div></NavLink>
   </li>
    
    <li className="nav-item ">
    <NavLink className="nav-link special mx-2 " to={'/cart'}>
      <div className='position-relative ' >
  <i className="fa-solid fa-cart-shopping  fa-lg">
    <span className='bg-main position-absolute top-0 start-100 translate-middle number rounded-circle d-flex justify-content-center align-items-center'>{noOfCartIteams || localStorage.getItem('intailNoOfCartIteams')}</span>
  </i></div>
</NavLink> </li></>}
    
      
  {isUserLogged?
  <>
      <li className="nav-item">
        <NavLink onClick={signOut} className="nav-link" >SignOut <i class="fa-solid fa-arrow-right-from-bracket fs-5"></i></NavLink>
      </li>
     </> 
     :
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/logIn'}>Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={'/register'}>Register</NavLink>
      </li>
      </>
      
    }
  
        </ul>
    
    
  </div>
</div>
</nav></div>
  </>
  )}