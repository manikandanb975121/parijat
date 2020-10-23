import React from'react';
// import "./Star.css";
import Card from 'react-bootstrap/Card';

const Starperformer = () => {
     
    return (
        <div className="">

            <Card className="Card10 shadow">
                
                <Card.Body>
                <Card.Title className="text font-weight-bold"><i className="float-left fa fa-user"></i> &nbsp; Star Performer </Card.Title>
                <hr />
                <div className="row">
                    
                    <div className="col-md-4 ml-5">
                        <Card.Img className="container" height="200vh"  style={{width: "185px"}}  className="rounded-circle avatar-xl card-imgs" variant="top" src="https://tse3.mm.bing.net/th?id=OIP.dXkj6U9p3sXMrDRl6Vqo7AHaHk&pid=Api&P=0&w=300&h=300" />
                    </div>
                    
                </div>
                
                {/* <hr /> */}
                <Card.Text className="font-weight-bold">
                    

                <h4 class="mt-4 text-center">Manikandan</h4>
                <p class="text-muted text-center">@Junior System Analyst</p>

                </Card.Text>
                </Card.Body>
                
            </Card>

                    
        </div>
      
    );
} 

export default Starperformer