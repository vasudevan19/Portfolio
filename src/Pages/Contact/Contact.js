import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:vasudevan191999@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919047752410";
  };

  const handleEmailCopy = () => {
    const emailText = "vasudevan191999gmail.com";
    navigator.clipboard.writeText(emailText);
    alert("Email copied to clipboard: " + emailText);
  };

  const handlePhoneCopy = () => {
    const phoneText = "9047752410";
    navigator.clipboard.writeText(phoneText);
    alert("Mobile Number copied to clipboard: " + phoneText);
  };

  return (
    <>
      <div className="outer-div">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          I'd love to hear from you! Reach out me through the following
          channels:
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <p style={{ marginRight: "10px", color: "black", fontSize:"20px" }}>Compose Mail</p>
            <div className="contact-details-ip">
              <MdEmail
                onClick={handleEmailClick}
                style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "#c71610",
                  fontSize: "30px",
                }}
              />
              <p
                onClick={handleEmailClick}
                style={{ marginTop: "5px", cursor: "pointer" }}
              >
                vasudevan191999@gmail.com
                <button className="copy-btn" onClick={handleEmailCopy}>
                  <MdContentCopy
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  />{" "}
                  <span className="tooltip">Copy to Clipboard</span>
                </button>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-details-ip">
              <p style={{ marginRight: "10px", color: "black", fontSize:"20px" }}>Make Call</p>
              <IoMdCall
                onClick={handlePhoneClick}
                style={{
                  marginTop: "10px",
                  cursor: "pointer",
                  color: "blue",
                  fontSize: "30px",
                }}
              />
              <p
                onClick={handlePhoneClick}
                style={{ marginTop: "5px", cursor: "pointer" }}
              >
                +91 9047752410{" "}
                <button className="copy-btn" onClick={handlePhoneCopy}>
                  <MdContentCopy
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  />{" "}
                  <span className="tooltip">Copy to Clipboard</span>
                </button>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="social-links">
          <div className="social-container-links">
            <h3 style={{ marginTop: "25px" }}>Social Accounts</h3>
            <ul>
              {/* <li>
                <a className="insta" href="#" target="blank">
                  <FaInstagram
                    style={{
                      backgroundColor: "white",
                      // borderRadius: "50%",
                      fontSize: "35px",
                    }}
                  />
                </a>
              </li> */}
              <li>
                <a className="linkedIn" href="https://www.linkedin.com/in/vasudevan-m-74155514b/" target="blank">
                  <FaLinkedin
                    style={{
                      backgroundColor: "white",
                      // borderRadius: "50%",
                      fontSize: "35px",
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;