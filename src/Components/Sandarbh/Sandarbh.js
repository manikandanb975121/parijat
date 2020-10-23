import React, { useState } from 'react';
import './Sandarbh.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import IdeaBoxI from '../../idea box.png'

function Sandarbh() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">

            <Card className="Card2 shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-newspaper"></i> &nbsp;  Sandarbh </Card.Title>
                <hr />
                <Card.Img height="210vh" variant="top" src="https://cdn.dribbble.com/users/1874602/screenshots/5647628/send-icon.gif" />
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
  export default Sandarbh;