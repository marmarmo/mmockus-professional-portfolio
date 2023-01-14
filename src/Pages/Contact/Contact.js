import React from "react";


export default function Contact() {
  return (
    <div className="container" style={{'top':"2000"}}>
      <h1>Contact Me!</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/marlamockus@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-lg btn-dark">
          Submit Form
        </button>
        </div>
      </form>
    </div>
  );
}
