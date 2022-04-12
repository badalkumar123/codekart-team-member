import React, { Component } from 'react'
import './Home.css'
import { RocketLaunch } from '@mui/icons-material';
import Profilecard from '../component/Profilecard'
import { Col, Row } from 'react-bootstrap';
import man1 from '../img/card7.png'
import man2 from '../img/brand11.png'
import man3 from '../img/brand12.png'
import man4 from '../img/brand2.png'



export class Home extends Component {
  render() {
    return (
      <div className='body'>
       <section className='team'>
         <h1 className='heading'>
       <i  className='rocket'> <RocketLaunch/></i> Team Members
       </h1>
       
        <Row>
          <Col>
       <Profilecard name='Emma Oliva' email='Emmaoliva@gmail.com' imag={man1}/>
       </Col>
       <Col>
       <Profilecard name='Sofia Adward' email='Sofiaadward@gmail.com' imag={man2}/>
       </Col>
       <Col>
       <Profilecard name='Touseeq liaz' email='Touseeqijaz@gmail.com' imag={man3}/>
       </Col>
       <Col>
       <Profilecard name='Amelia Alex' email='Ameliaalex@gmail.com' imag={man4}/>
       </Col>
       
       </Row>
       
        </section>
        
       
         
      </div>
    )
  }
}

export default Home