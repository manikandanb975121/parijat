import React, { useState } from 'react';
import './Ideabox.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import IdeaBoxI from '../../idea box.png'

function IdeaBox() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">

            <Card className="Card shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-lightbulb"></i> &nbsp; Idea Box <i className="float-right fa fa-plus"></i></Card.Title>
                <hr />
                <Card.Img height="210vh" variant="top" src={IdeaBoxI} />
                <hr />
                <Card.Text className="font-weight-bold">
                    This is where you can leave your Ideas.
                </Card.Text>
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