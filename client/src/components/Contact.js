import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
   
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      //   console.log(data);
      setUserData({ ...userData, ...data });

    

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userContact();
  }, []);

  // we are storeing data in state
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // send the data to the backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    if (res.status === 400) {
      alert("message not send plzz fill data correctly");
    } else {
      alert("message send");
      setUserData({ ...userData, message: "" });
    }
  };

  //  doing changes
  // make my usestate and put data in it and show data in placeholder

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row mt-3 mb-5">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-lg-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="pone"
                  srcset=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>

                  <div className="contact_info_text">+91 121 342 12</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-lg-start align-items-center ">
                <img
                  src="https://img.icons8.com/material-outlined/24/4a90e2/mail.png"
                  alt="pone"
                  srcset=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">email</div>

                  <div className="contact_info_text">sid@gmail.com</div>
                </div>
              </div>

              <div className="contact_info_item d-flex justify-content-lg-start align-items-center">
                <img
                  src="https://img.icons8.com/material-outlined/24/4a90e2/worldwide-location.png"
                  alt="pone"
                  srcset=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">address</div>

                  <div className="contact_info_text">mumbai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form */}

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-1">
              <div className="contact_form_container ">
                <div className="contact_from_title">get in touch</div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      onChange={handleInputs}
                      name="name"
                      value={userData.name}
                 
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      onChange={handleInputs}
                      name="email"
                      value={userData.email}
                    
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      onChange={handleInputs}
                      name="phone"
                      value={userData.phone}
                    
                      required="true"
                    />
                  </div>

                  <div className="contact-form-text mt-3 ">
                    <textarea
                      className="text_field contact_form_message"
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}
                      placeholder="message"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_button">
                    <button
                      type="submit"
                      onClick={contactForm}
                      className="button contact_submit_button btn btn-outline-primary"
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
