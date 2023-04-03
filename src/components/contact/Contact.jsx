import "./contact.scss";
import { FaUserAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="container-sm">
          <h1>CONTACT</h1>
          <h2>Got a question to ask?</h2>
          <p>Feel free to leave me a message, my inbox is always open. I'll try my best to get back to you!</p>
        </div>
       
      </div>
      <div className="right">
        <form
          action="https://formsubmit.co/3e90d7fbd1533c1b970626c45357de84"
          method="POST"
        >
          <div>
            <h5>NAME</h5>
            <div className="input-group">
              <div className="input-group-prepend ">
                <span className="input-group-text" id="">
                  <i className="classes you have">
                    <FaUserAlt />
                  </i>
                </span>
              </div>
              <input
                name="name"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div>
            <h5>EMAIL</h5>
            <div className="input-group">
              <div className="input-group-prepend ">
                <span className="input-group-text" id="">
                  <i className="classes you have">
                    <FaEnvelope />
                  </i>
                </span>
              </div>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
          </div>
          <div>
            <h5>MESSAGE</h5>
            <div className="input-group">
              <textarea name="message" required></textarea>
            </div>
          </div>
          <button type="button" class="btn btn-secondary">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
