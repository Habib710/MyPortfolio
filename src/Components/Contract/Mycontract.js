import React from 'react';
import Swal from 'sweetalert2';

const Mycontract = () => {

   
        const send=(e)=>{
          e.preventDefault();
      
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Messege has been Send',
            showConfirmButton: false,
            timer: 1500
          });
        }
      
      
       

    return (
        <div>
             <section id='con' className='my-5 container'>
          <h1 className='text-center my-5'>Contract </h1>

          <div className='row container'>
              <div className='col-lg-8'>
                  <h3 className='p-3'>Get In Touch</h3>
                  <form action="https://formsubmit.co/el/yulubo" method="POST"  className='contract-form'>
                      <input className='contract-form-css' type="text" placeholder='YOUR NAME' name="name" required />
                      <br />
                      <input className='contract-form-css' type="email" placeholder='YOUR EMAIL' name="email"  required/>
                      <br />
                      <input className='contract-form-css' type="number" placeholder='YOUR PHONE NUMBER' name="number" required />
                      <br />

                      <textarea className='contract-form-css'placeholder='WRIGHT YOUR MASSEGE' name='text' ></textarea>
                      <br />
                      <button onClick={send} type='submit'  value='Send' className='hIRE-CSS-BTN'>Send</button>
                  </form>

              </div>
              <div className='col-lg-4'>
                  <h3 className='p-3'>My Contact Details</h3>
                  <h6 className='mt-4'>Email</h6>
                  <p>mdhabib71024@gmail.com</p>
                  <h6 className='mt-4'>Phone</h6>
                  <p>+8801571024601</p>
                  <h6 className='mt-5'>Adress</h6>
                  <p>Narayanganj, Dhaka , Bangladesh</p>

              </div>
          </div>


      </section>
            
        </div>
    );
};

export default Mycontract;