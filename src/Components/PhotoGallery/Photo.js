import React, { useState } from 'react';
import './Photo.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Photo() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const images = [
        {
          original: 'https://www.poynter.org/wp-content/uploads/2020/06/shutterstock_1211814685.png',
          thumbnail: 'https://www.poynter.org/wp-content/uploads/2020/06/shutterstock_1211814685.png',
        },
        {
          original: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_270377375.jpg',
          thumbnail: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_270377375.jpg',
        },
        {
          original: 'https://cdn.britannica.com/89/204689-050-0C22EBDE/Alexandria-Egypt-reward-competitions-Bridesmaids-Competition-participation-September-12-2014.jpg',
          thumbnail: 'https://cdn.britannica.com/89/204689-050-0C22EBDE/Alexandria-Egypt-reward-competitions-Bridesmaids-Competition-participation-September-12-2014.jpg',
        },
        {
            original: 'https://www.pressesprecher.com/sites/default/files/styles/fachartikel_gro_/public/artikelbild/gettyimages-1040805860_bdpaward_online.jpg?itok=rM11h4p6',
            thumbnail: 'https://www.pressesprecher.com/sites/default/files/styles/fachartikel_gro_/public/artikelbild/gettyimages-1040805860_bdpaward_online.jpg?itok=rM11h4p6',
        },
        {
            original: 'https://riskinfonz.co.nz/wp-content/uploads/2019/06/190614-Award-nominations-iStock-1002281408.jpg',
            thumbnail: 'https://riskinfonz.co.nz/wp-content/uploads/2019/06/190614-Award-nominations-iStock-1002281408.jpg',
        }
      ];
  
    return (
        <div className="">
            <Card className="Card9 shadow">
                {/* <Card.Header>Features</Card.Header> */}
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-camera"></i> &nbsp;Photo Gallery </Card.Title>
                <hr />
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text> */}

                    <ImageGallery className="img2" items={images}/>;

                {/* <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://www.poynter.org/wp-content/uploads/2020/06/shutterstock_1211814685.png"
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
                        src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_270377375.jpg"
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
                        src="https://cdn.britannica.com/89/204689-050-0C22EBDE/Alexandria-Egypt-reward-competitions-Bridesmaids-Competition-participation-September-12-2014.jpg"
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
                </Carousel> */}
                </Card.Body>
            </Card>

                    
        </div>
      
    );
  }
  
// render(<ControlledCarousel />);
  export default Photo;