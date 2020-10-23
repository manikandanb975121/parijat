import React, { useState } from 'react';
import './Facebook.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import IdeaBoxI from '../../facebook.png'

function IdeaBox() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">

            <Card className="Card6 shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fab fa-facebook-f"></i> &nbsp;  Facebook Feed </Card.Title>
                <hr />
                <Card.Img height="290vh" variant="top" src={IdeaBoxI} />
                {/* <hr /> */}
                {/* <Card.Text className="font-weight-bold">
                    This is where you can leave your Ideas.
                </Card.Text> */}
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>

                    
        </div>
      
    );
  }
  
// render(<ControlledCarousel />);
  export default IdeaBox;