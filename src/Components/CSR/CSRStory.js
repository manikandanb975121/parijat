import React, { useState } from 'react';
import './CSRStory.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function CSR() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">
            <Card className="Card3 shadow">
                {/* <Card.Header>Features</Card.Header> */}
                <Card.Body>
                <Card.Title className="text font-weight-bold"> <i className="float-left fa fa-key"></i> &nbsp; CRS Story</Card.Title>
                <hr />
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text> */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://oneteam.gr/images/stories/com_form2content/p29/f1153/CSR-1.jpg"
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
                        src="https://csr.parijat.in/wp-content/uploads/2019/05/IMG_20190504_130409.jpg"
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
                        src="https://hilo.hawaii.edu/chancellor/stories/wp-content/uploads/2020/04/Sewing-Circle.jpg"
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
  export default CSR;