import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
          <h4>Quick Links</h4>
            <ui className="list-unstyled">
              <li><a href="#" className="para">Parijat Industries</a></li>
              <li><a href="#" className="para">Leeds India</a></li>
              <li><a href="#" className="para">Leeds Lifesciences UK</a></li>
              <li><a href="#" className="para">Belin Russia</a></li>
              <li><a href="#" className="para">Belin Hongkong</a></li>
              <li><a href="#" className="para">Parji Mali Sa</a></li>
              <li><a href="#" className="para">Corporate Sustainability</a></li>

            </ui>
            {/* <h4>THICC MEMES INC</h4>
            <h6 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h6> */}
          </div>
          {/* Column2 */}
          <div className="col">
            {/* <h4>Stuff</h4> */}
            <ui className="list-unstyled">
              <li>Happy</li>
              <li>Bizom</li>
              <li>Anand Foundation</li>
              <li>Crush Fitness</li>
              <li>Little Red Car Films</li>
              <li>Hub Hoppers</li>

            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <h4>THICC MEMES INC</h4>
            <h6 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h6>

            {/* <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui> */}
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
             Terms & Condition | Copyright &#169; 2016 Parijat. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;