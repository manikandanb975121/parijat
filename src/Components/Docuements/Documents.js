import React, { useState } from 'react';
import './Documents.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import IdeaBoxI from '../../idea box.png'

function Mission() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        

            <Card className="Card7 shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-newspaper"></i> &nbsp;  Latest Documents / Policies </Card.Title>
                <hr />
                <Card.Img height="210vh" variant="top" src="https://cdn.dribbble.com/users/105634/screenshots/1889485/startpack_icons.gif" />
                <hr />
                <Card.Text className="font-weight-bold">
                <button className="btn btn-primary">Read More</button>
                </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer> */}
            </Card>

                    
    
      
    );
  }
  
// render(<ControlledCarousel />);
  export default Mission;