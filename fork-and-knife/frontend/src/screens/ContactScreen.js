import React, { Fragment } from "react";
import "./CSS/Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const contact = () => {
  return (
    <Fragment>
      <section className="contact">
        <video className="videoTag" autoPlay loop muted>
          <source src="./images/contact_1.mp4" type="video/mp4" />
        </video>

        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-container">
          <div className="row">
            <div className="column">
              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="text">
                    <FaPhone
                      style={{
                        fontSize: "30px",
                        marginBottom: "10px",
                        color: "black",
                      }}
                    ></FaPhone>
                    <h5>Call Us</h5>
                    <p>123-123-1234</p>
                  </div>
                </div>
              </div>

              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon"></div>
                  <div className="text">
                    <FaEnvelope
                      style={{
                        fontSize: "36px",
                        marginBottom: "10px",
                        color: "black",
                      }}
                    ></FaEnvelope>
                    <h5>EMAIL</h5>
                    <p>help@forkandknife.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-widget">
                <div className="contact-widget-item">
                  <div className="icon"></div>
                  <div className="text">
                    <FaMapMarkerAlt
                      style={{
                        fontSize: "36px",
                        marginBottom: "10px",
                        color: "black",
                      }}
                    ></FaMapMarkerAlt>
                    <h5>Address</h5>
                    <p>219 Washington street,Boston,MA,02115,United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="map-column">
              <div className="contact-map" style={{ marginTop: "100px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.100145223002!2d-71.071258!3d42.3403882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37b8c7e11c787%3A0x79a6ded37af7bd4f!2sWashington%20St.!5e0!3m2!1sen!2sus!4v1670128383037!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="form-row" style={{ margin: "auto" }}>
              <div className="column" style={{ marginTop: "40px" }}>
                <form>
                  <div className="form-header">
                    <h4 className="form-title"> Reservations </h4>
                  </div>

                  <div className="form-ui">
                    <div className="form-element">
                      <label htmlFor="location">
                        <i className="error-label"></i>
                        <span className="input-label">Location</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        aria-describedby="location"
                        placeholder="Enter Your Location"
                        style={{ border: "3px solid black" }}
                      />
                    </div>

                    <div className="form-element">
                      <label htmlFor="seats">
                        <span className="input-label">Number of People</span>
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        aria-describedby="seats"
                        placeholder="Number of People"
                        style={{ border: "3px solid black" }}
                      />
                    </div>

                    <div className="form-element">
                      <label htmlFor="dates">
                        <span className="input-label">Date</span>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        aria-describedby="date"
                        placeholder="Date"
                        style={{ border: "3px solid black" }}
                      />
                    </div>

                    <div className="form-element">
                      <label htmlFor="email">
                        <span className="input-label">Email</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="email"
                        placeholder="Enter your Email "
                        style={{ border: "3px solid black" }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <button
                      style={{ marginBottom: "10px" }}
                      className="form-button"
                    >
                      RESERVE YOUR SPOT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default contact;
