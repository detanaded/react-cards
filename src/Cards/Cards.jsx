import React, { Component } from 'react'
import Card from './cardUI'
import img1 from '../Assets/bottle.jpg'
import img2 from '../Assets/Products.png'
import img3 from '../Assets/section.jpg'



class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col md-4">
                        <Card imgsrc={img1} title="Card 1"/>
                    </div>
                    <div className="col md-4">
                        <Card imgsrc={img2} title="Card 2"/>
                    </div>
                    <div className="col md-4">
                        <Card imgsrc={img3} title="Card 3"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Cards