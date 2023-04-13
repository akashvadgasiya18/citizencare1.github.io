import React from "react";
import ImageBanner from "../../Components/Common/ImageBanner";
import Footer from "../../Components/Footer/Footer";
import "../Contact/Contact.css";
import Navbar5 from "../../Components/Navbar/Navbar5";

const Contact = () => {
  return (
    <>
      <Navbar5 />
      <ImageBanner title="Contact Page" />

      <section className="contact">
        <div className="contact-heading">
          <h2>Let's get in touch</h2>
        </div>

        <div className="container1">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon1">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div className="text1">
                    <h5>Address</h5>
                    <p>B/100, Margentina coloni, New york, United State</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon1">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div className="text1">
                    <h5>Contact Us</h5>
                    <p>+123 456 7890</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon1">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div className="text1">
                    <h5>Email</h5>
                    <p>abcd123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="contact-form">
                <form
                  action="https://formspree.io/f/myyadpyg"
                  className="form1"
                  method="POST"
                >
                  <input type="text" placeholder="Name" className="input1" name="Username" />
                  <input type="email" placeholder="Email" className="input1" name="Email"/>
                  <textarea placeholder="Message.." className="msg1" name="message"></textarea>
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Contact;
