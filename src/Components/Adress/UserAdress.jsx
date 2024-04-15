import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserAdress({ onSelectAddress }) {
    const[userLoggedAdress,setuserLoggedAdress]= useState([])
    
   async function getLoggedUserAdress() {
    const{data}= await axios.get('https://ecommerce.routemisr.com/api/v1/addresses',
    {headers:{token:localStorage.getItem('token')

}}
)
console.log(data)
setuserLoggedAdress(data.data)
}



useEffect(() => {
    getLoggedUserAdress()

  }, [])
   
  const handleAddressSelect = (address) => {
    onSelectAddress(address);
  };

  return (
    <div className='w-100 ' >
        { userLoggedAdress?.map((adress, index) => (
          <div className='text-start' key={index}>
            
    <div className=' p-3 mt-3 w-100 adress '>
    
    <h5 className='pt-2' ><span className='fw-bold'>Name</span> : {adress.name}</h5>
    <h5 className='pt-2' ><span className='fw-bold' >Details</span> : {adress.details}</h5>
    <h5 className='pt-2' ><span className='fw-bold' >City</span> : {adress.city}</h5>
    <h5 className='pt-2' ><span className='fw-bold' >Phone</span> : {adress.phone}</h5>
    <input
              type="radio"
              name="selectedAddress"
              value={adress.name}
              onChange={() => handleAddressSelect(adress)}
            />
    

</div>

          </div>)) }
      </div>
  )
}

