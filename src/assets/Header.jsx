import React from 'react'
import { useState } from 'react';

const Header = () => {

  const img1 = "src/assets/firstShoe.png"
  const img2 = "src/assets/secondShoe.png"  
  const img3 = "src/assets/thirdShoe.png"

  const [selectedImage, setSelectedImage] = useState(img1);

      const updateImage = () => {
        selectedImage === img1 ? setSelectedImage(img2) :
        selectedImage === img2 ? setSelectedImage(img3) : setSelectedImage(img1);
      }
    

  
  return (
    <div className='headerWrapper'> 
      <div className='header-container'>
    
    <header className='header'>
      <img src="src/assets/nike.svg" alt="nike logo" />
        <h1>Home</h1>
        <h1>About us</h1>
        <h1>Products</h1>
        <h1>Contact us</h1>
        <img src="src/assets/threedash.svg" alt="not found" height={30}/> 
    </header>
      <p className='header-description'>Our Summer Collection</p>

      <p className='header-new-arrival'>The New Arrival <span style={{ color: 'red' }}>Nike</span> shoes </p>

           <p className='discover'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <button className='shop-now'>Shop Now <img src="src/assets/arrow.svg" alt="" /></button>


<div className='row1'>
       <div className='column1'>
<h2>1k+ </h2>
<h2>Brands</h2>  
      </div> 
       <div className='column1'>
<h2>500+ </h2>
<h2>shops</h2>   
      </div>
       <div className='column1'>
<h2>250k+ </h2>
<h2>Customers</h2>  
     </div> 

</div>       
        <div className='imageBackground'>
      <div className='imageGallery' onClick={updateImage}>
        <img src={selectedImage} alt="nike shoes" className='defaultImage' />
        <div className="thumbnail-row">
          <img src="src/assets/firstShoe.png" alt="nike shoes" className='images1' onClick={() => setSelectedImage(img1)}/>
          <img src="src/assets/secondShoe.png" alt="nike shoes"  className='images1' onClick={() => setSelectedImage(img2)}/>
          <img src="src/assets/thirdShoe.png" alt="nike shoes" className='images1' onClick={() => setSelectedImage(img3)}/>
        </div>
      </div>
    </div>
       
    </div>
<br /><br /><br /><br /><br />
    </div>
  )
}

export default Header