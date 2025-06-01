 import React from 'react'
 
 const Nike = () => {
   return (

    <div className='nikeWrapper'>

     <div className='ourPopularProduct'>
      <h1>
      Our <span style={{color: 'red'}}>Popular</span> Products 
      </h1>
      <p className='popularProductDetails'>experience top-notch quality and stlye with our sought -after selections. discover a world of comfort, design, and value</p>
     </div>

   <div className='productImages'>

        <div className='column2'>
          <img src="src/assets/fourthShoe.svg" alt="" />
          <p> <img src="src/assets/star.svg" alt="" />(4.5) Nike Air Jordan-01 <span style={{color: 'red'}}>$200.20</span> </p>
        </div>


        <div className='column2'> 
          <img src="src/assets/fifthShoe.svg" alt="" />
          <p> <img src="src/assets/star.svg" alt="" />(4.5) Nike Air Jordan-10 <span style={{color: 'red'}}>$210.20</span> </p>
         </div>


         <div className='column2'>
          <img src="src/assets/sixthShoe.svg" alt="" />
          <p> <img src="src/assets/star.svg" alt="" />(4.5) Nike Air Jordan-100 <span style={{color: 'red'}}>$220.20</span> </p>
        </div>


        <div className='column2'>
          <img src="src/assets/seventhShoe.svg" alt="" />
          <p> <img src="src/assets/star.svg" alt="" />(4.5) Nike Air Jordan-001 <span style={{color: 'red'}}>$230.20</span> </p>
        </div>

<div className="qualityShoes">
       <h1>
       We Provide You <span style={{color: 'red'}}>Super Quality</span> Shoes
         </h1>
    
    <p>Ensuring Premium comfort and style, our meticuloursly crafted footwear is disigned to elevate your experience, providing you with unmatched quality, innovaaion, and a touch of elegance. <br /><br />

      Our dedication to detail and and excellence ensures your satisfaction
       <br /><br />

      
    </p>

     <button className='viewDetails'> View details</button>
     </div>
<br /><br />

      <img src="src/assets/eighthShoe.svg" alt="" />
<div className="row3">
      <button className='column3'> <img className='imgBackground' src="src/assets/freeshipping.svg" alt="" /> Enjoy seamless shopping with our complimentary shipping service.
      </button>


      <button className='column3'> <img src="src/assets/securepayment.svg" alt="" className='imgBackground'/> Enjoy seamless shopping with our complimentary shipping service.
      </button>


      <button className='column3'> <img className='imgBackground'src=" src/assets/securepayment.svg" alt="" /> Enjoy seamless shopping with our complimentary shipping service.
      </button>
      <br /><br />



      </div>

      <div className="specialOffer">
        <h1>
          <span style={{color: 'red'}}>Special</span> Offer
        </h1>
unbeatable
        <p>
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.

Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional <br /> <br />
        </p>

        <button className='shopNow2'>Shop Now</button>  <button>learnmore</button>
      </div> <br /><br /><br />

  </div>
  

      </div>


   )

}

export default Nike