import React from 'react'
import img1 from "../../images/banner_img1.png"

const ImageSection = () => {
    return (
        <div style={{ width: '100%'}}>
            <div className='col order-1 order-lg-2' id='header' style={{ width:'100%', height:'auto'}}>
                <img src={img1} alt="image1" className='animated' />
            </div>
        </div>
    )
}

export default ImageSection
