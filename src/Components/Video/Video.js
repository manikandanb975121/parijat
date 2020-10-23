import React from 'react'
import ReactPlayer from 'react-player'
import Card from 'react-bootstrap/Card';
import './Video.css'

function Video () {
    return (

        <div className="">
        <Card className="Card shadow">
            {/* <Card.Header>Features</Card.Header> */}
            <Card.Body>
            <Card.Title className="text font-weight-bold"><i className="float-left fa fa-photo-video"></i> &nbsp; Video Player </Card.Title>
            <hr />
            <ReactPlayer
                controls
                url='https://youtu.be/cTmWqT-2hOo'
                height = '300px'
            />
            
            </Card.Body>
        </Card>

                
    </div>
    )
}

export default Video;