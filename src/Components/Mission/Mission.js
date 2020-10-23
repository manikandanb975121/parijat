import React, { useState } from 'react';
import './Mission.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import IdeaBoxI from '../../idea box.png'

function Mission() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">

            <Card className="Card2 shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-newspaper"></i> &nbsp;  Mission Ignition </Card.Title>
                <hr />
                <Card.Img height="210vh" variant="top" src="https://i.pinimg.com/originals/96/09/d5/9609d56cd42946c821dc5c1f5d1eac68.gif" />
                <hr />
                <Card.Text className="font-weight-bold">
                <button className="btn btn-primary">Read More</button>
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
  export default Mission;