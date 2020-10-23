import React, { useState } from 'react';
import './Features.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">
            <Card className="Card shadow">
                {/* <Card.Header>Features</Card.Header> */}
                <Card.Body>
                <Card.Title className="text font-weight-bold"> <i className="float-left fa fa-key"></i> &nbsp; Features</Card.Title>
                <hr />
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text> */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://www.porthcawlrunners.com/wp-content/uploads/2019/02/cropped-cropped-running_in_the_sun.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Runners</h3>
                        <p className="text-dark font-weight-bold">“You must do the thing you think you cannot do.”— Eleanor Roosevelt</p>
                        <button className="btn btn-primary">Read More</button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://www.securew2.com/wp-content/uploads/2020/07/feat.webp"
                        alt="Second slide"
                    />
            
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Second slide label</h3>
                        <p className="text-dark font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn btn-primary">Read More</button>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://images.idgesg.net/images/article/2017/08/security_password_lock_biometric_fingerprint_thinkstockphotos-488690699_3x2-100732429-large.jpg"
                        alt="Third slide"
                    />
            
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Third slide label</h3>
                        <p className="text-dark font-weight-bold">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        <button className="btn btn-primary">Read More</button>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Card.Body>
            </Card>

                    
        </div>
      
    );
  }
  
// render(<ControlledCarousel />);
  export default ControlledCarousel;