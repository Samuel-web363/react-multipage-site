import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="page contact">
      <div className="blog-card">
        <h1>Contact Us</h1>
        <p className="blog-date">We'd love to hear from you!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
          <textarea placeholder="Your Message" className="form-textarea" required />
          <button type="submit" className="form-button">Send Message</button>
        </form>

        <div className="page-links">
          <Link to="/" className="link-button">Go to Home</Link>
          <Link to="/about" className="link-button">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
