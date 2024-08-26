import React from 'react'
import './footer.css';

export default function Footer() {
    return (
      <div>
        <div className="footer">
          <div className="row p-5">
            <div className="col-lg-6 col-md-6">
              <p>CastME</p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="column">
                <h3>Column One</h3>
                <ul>
                  <li>
                    <a href="#">Link One</a>
                  </li>
                  <li>
                    <a href="#">Link Two</a>
                  </li>
                  <li>
                    <a href="#">Link Three</a>
                  </li>
                  <li>
                    <a href="#">Link Four</a>
                  </li>
                  <li>
                    <a href="#">Link Five</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="column">
                <h3>Column Two</h3>
                <ul>
                  <li>
                    <a href="#">Link Six</a>
                  </li>
                  <li>
                    <a href="#">Link Seven</a>
                  </li>
                  <li>
                    <a href="#">Link Eight</a>
                  </li>
                  <li>
                    <a href="#">Link Nine</a>
                  </li>
                  <li>
                    <a href="#">Link Ten</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="column follow-us">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-x"></i> X
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i> Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footerbottom p-5">
          <div className="footer-bottom">
            <p>&copy; 2024 INFOLITZ. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    );
}
