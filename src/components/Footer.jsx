import React from "react";
import './Home.css'

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">
              <footer className="footer">
                <div className="footer-content">
                  <p>&copy; 2024 NYD Dance Studio. Developed and designed by 
                    <a href="https://www.linkedin.com/in/deekshith2912/" target="_blank" rel="noopener noreferrer"> Deekshith B </a> 
                    and 
                    <a href="https://www.linkedin.com/in/sanjana-woodi-70189b1b9/" target="_blank" rel="noopener noreferrer"> Sanjana WG </a>.
                  </p>
                </div>
              </footer>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
