import React from 'react'
// import 'bootstrap'
import "../Banner/Banner.css"
import Typewrittertext from './Typewrittertext'

import ImageSection from './ImageSection'

const Banner = () => {
    
    return (
        <>
            {/* <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg' style={{ height:'32rem'}}>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center flex-column" style={{ marginTop:'10rem'}} >
                                    <h1>Grow your Business with  <strong className='brand-name'>Citizencare.com</strong></h1>

                                    <h2 className='my-3'>
                                        we are the the team of talented developers making unique website
                                    </h2>
                                </div>

                                <div className='col order-1 order-lg-2'>
                                    <img src={img1} style={{ height: '500px', width: 'auto',marginLeft:'7rem', marginTop:'4rem', background:'darkblue',borderRadius:'50%',padding:'10px 7rem' }} alt="image1" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="ban-section1">
                <div className="ban-container">
                    <div className="box1">
                        {/* <h1>Akash</h1> */}
                        <Typewrittertext />
                    </div>
                    <div className="box1" style={{marginLeft:'-5rem'}}>
                        
                        <ImageSection />
                    </div>
                </div>
            </div>
        </>


    )
}
export default Banner