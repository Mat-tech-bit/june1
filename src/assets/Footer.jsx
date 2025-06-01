import React from 'react'

const Footer = () => {
  return (
    <section className='footerWrapper'>  
     <img src="src/assets/nike.svg" alt="" /><br />
        <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
       <div className='socialMediaIcons'>
<button>
      <img src="src/assets/facebookLogo.svg" alt="" /> </button>
      <button> <img src="src/assets/tweeterLogo.svg" alt="" /> </button>
      <button> <img src="src/assets/instagramLogo.svg" alt="" /> </button>
      </div>


      <div className='footerLinks'>
        <div className='firstColumn'>
        <h1>Products </h1>
  <ul>
     <li>Air Force 1</li>
     <li>Air Max</li>
     <li>Air Jordan 1</li>
     <li>Air Force 2</li>
     <li>Nike Waffle Racer</li>
     <li>Nike Cortez</li>
  </ul>

        </div>
        <div className='firstColumn'>
        <h1>Help</h1>
  <ul>
     <li>About us</li>
     <li>FAQs</li>
     <li>How it works</li>
     <li>Privacy policy</li>
     <li>Payment policy</li>
  </ul>
        </div>
        <div className='firstColumn'>
        <h1>Get in touch</h1>
  <ul>
     <li>matthewakinyemi24@gmail.com</li>
     <li>+2349025546836</li>
  </ul>
          </div>
      </div>

       </section>
  )
}

export default Footer