import React, { useState } from 'react';
import './News.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function News() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="">
            <Card className="Card shadow">
                {/* <Card.Header>Features</Card.Header> */}
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-newspaper"></i> &nbsp; News & Announcement </Card.Title>
                <hr></hr>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text> */}
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img1"
                        src="https://joehertvik.com/wp-content/uploads/2013/10/announcement-person.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Runners</h3>
                        <p className="text-dark font-weight-bold">“You must do the thing you think you cannot do.”— Eleanor Roosevelt</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img1"
                        src="https://www.dagubi.com/media/catalog/product/cache/3/image/800x/040ec09b1e35df139433887a97daa66f/h/o/how_to_create_your_own_technical_brushes_in_-_adobe_illustrator_tutorial_-_04_thumb_vs.jpg"
                        alt="Second slide"
                    />
            
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Second slide label</h3>
                        <p className="text-dark font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img1"
                        src="https://zdnet2.cbsistatic.com/hub/i/r/2014/10/05/e86b059c-4c2b-11e4-b6a0-d4ae52e95e57/resize/770xauto/ee525b727ccbbde2896309efd8c99c1b/product-unveil-09122013-v1.jpg"
                        alt="Third slide"
                    />
            
                    <Carousel.Caption>
                        <h3 className="text-dark font-weight-bold">Third slide label</h3>
                        <p className="text-dark font-weight-bold">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Card.Body>
            </Card>

                    
        </div>
      
    );
  }
  
// render(<ControlledCarousel />);
  export default News;