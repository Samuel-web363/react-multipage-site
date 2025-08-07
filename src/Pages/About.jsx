import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page about">
      <div className="blog-card">
        <h1>Why Use React Router DOM?</h1>
        <p className="blog-date">Published: August 7, 2025</p>
        <p>
          React Router DOM lets you define routes and navigation in a declarative way.
          It's essential for building single-page applications (SPAs).
        </p>
        <ul>
          <li>Clean routing</li>
          <li>Nested layouts</li>
          <li>Route parameters and more</li>
        </ul>

        <div className="page-links">
          <Link to="/" className="link-button">Back to Home</Link>
          <Link to="/contact" className="link-button">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
