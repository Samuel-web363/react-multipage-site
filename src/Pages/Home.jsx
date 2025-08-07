
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page home">
      <div className="blog-card">
        <h1>Getting Started with React Router DOM</h1>
        <p className="blog-date">Published: August 7, 2025</p>
        <p>
          React Router DOM helps you create dynamic navigation in your React apps.
          You can switch between pages without reloading the page.
        </p>
        <p>
          This tutorial has three sections: Home, About, and Contact.
          Click below to learn more.
        </p>
        
      </div>
    </div>
  );
};

export default Home;
