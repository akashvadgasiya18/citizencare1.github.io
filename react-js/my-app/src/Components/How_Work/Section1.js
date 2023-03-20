import React from 'react'
import first from "../../Feature_icon/sec1.png"
import second from "../../Feature_icon/sec2.png"
import third from "../../Feature_icon/sec3.png"
import "../../Components/How_Work/Sections.css"

const Section1 = () => {
    return (
        <>
            <section class="aon-howit-area2">
                <section class="container-work">
                    <div class="aon-howit-area2-section">
                        <div class="aon-howit-area2-bg">
                            {/* Title Section Start */}

                            <div class="section-head aon-title-center white">
                                <span class="aon-sub-title" style={{ color: '#FFB600',fontFamily:'Poppins' }}>Steps</span>
                                <h2 class="sf-title" style={{ color: '#022279' }}>How Service Finder Works</h2>
                            </div>

                            {/* Title Section Start End */}

                            <div class="section-content">
                                <div class="aon-categories-area2-section">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-4 col-md-6">
                                            <div class="aon-howit-area2-iconbox aon-icon-effect ">
                                                <div class="aone-howit-number">01</div>
                                                <div class="aon-howit-area2-icon">
                                                    <span style={{ backgroundColor: '#FFB600' }}>
                                                        <i class="aon-icon">
                                                            <img src={first} alt="section1" className='work-icon'/>
                                                        </i>
                                                    </span>
                                                </div>
                                                <div class="aon-howit-area2-content">
                                                    <h4 class="aon-title" style={{ color: '#022279' }}>Describe Your Task</h4>
                                                    <p style={{ color: '#939393' }}>This helps us determine which Taskers are best for your job</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6">
                                            <div class="aon-howit-area2-iconbox aon-icon-effect aon-howit-arrow">
                                                <div class="aone-howit-number">02</div>
                                                <div class="aon-howit-area2-icon">
                                                    <span style={{ backgroundColor: '#FFB600' }}>
                                                        <i class="aon-icon">
                                                            <img src={second} alt="section2" /></i>
                                                    </span>
                                                </div>
                                                <div class="aon-howit-area2-content">
                                                    <h4 class="aon-title" style={{ color:'#022279'}}>Choose a Tasker</h4>
                                                    <p style={{color:'#939393'}}>This helps us determine which Taskers are best for your job</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6">
                                            <div class="aon-howit-area2-iconbox aon-icon-effect ">
                                                <div class="aone-howit-number">03</div>
                                                <div class="aon-howit-area2-icon">
                                                    <span style={{ backgroundColor:'#FFB600'}}>
                                                        <i class="aon-icon">
                                                            <img src={third} alt="section3" /></i>
                                                    </span>
                                                </div>
                                                <div class="aon-howit-area2-content">
                                                    <h4 class="aon-title" style={{ color:'#022279'}}>Live Smarter</h4>
                                                    <p style={{ color:'#939393'}}>This helps us determine which Taskers are best for your job</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sf-overlay-main" style={{opacity:'0.8'}}></div>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Section1
