import React from 'react'

export default function Footer() {
  return (<>
{/* //     <div className='mt-5'>
//       <div className='container'> 
//      <h4>Get the FreshCart app</h4>
//      <p>We will send you a link, open it on your phone to download the app.</p>
//      <div >
//      <form>
//   <div className="form-row">
  
//     <div className="form-group d-flex  ">
//       <input name='InputEmail' type="email" className="form-control sInput " id="inputEmail" placeholder="Enter your Email"/>
//     </div>
//     <button type="submit" className="btn bg-main text-white">Share App Link</button>
//   </div>
  
 


  
// </form>
//      </div>
//      </div>
//     </div> */}


<footer id="footer">
<div class="container">
  <div class="row">
    <div class="col-md-3">
     
                <div class="footer-about">
                    <p></p>
                </div>

    </div>
    <div class="col-md-3">
      <div class="useful-link">
        <h2>Useful Links</h2>
        <div class="use-links">
          <li><a href="index.html"><i class="fa-solid fa-angles-right"></i> Home</a></li>
          <li><a href="about.html"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
          <li><a href="gallery.html"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
          <li><a href="contact.html"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
        </div>
      </div>

    </div>
              <div class="col-md-3">
                  <div class="social-links">
        <h2>Follow Us</h2>
        <div class="social-icons">
          <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
          <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
          <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
        </div>
      </div>
              

              </div>
    <div class="col-md-3">
      <div class="address">
        <h2>Address</h2>
        <div class="address-links">
          <li class="address1"><i class="fa-solid fa-location-dot"></i>UBT Dukagjini</li>
             <li><a href=""><i class="fa-solid fa-phone"></i> +123456789</a></li>
             <li><a href=""><i class="fa-solid fa-envelope"></i> mail@mail.com</a></li>
        </div>
      </div>
    </div>
            
  </div>
</div>

</footer>

<section id="copy-right">
<div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>  
  Rentirate <a href="#" className='fw-bold'></a> 


</div>

</section>

  </>)
}
