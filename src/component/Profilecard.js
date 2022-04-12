import { Assignment, CheckCircle, Favorite, FavoriteBorderOutlined, Visibility } from '@mui/icons-material'
import React from 'react'
import './Profilecard.css'


export default function Profilecard(props) {
  return (
    <div className='container'>
        <div className='box'>
            <div className='topbar'></div>
            <div className='nav'>
                <i className='verify'><CheckCircle/></i>
                <input className='heart-btn' type='checkbox' id="heart-btn"></input>
                <div className='heart' ><FavoriteBorderOutlined/></div>
               
                 
               
            </div>
            <div className='details'>
                <img src={props.imag} alt=''></img>
                <strong>{props.name}</strong>
                <p>{props.email}</p>
                
            </div>
            <div class ='btn'>
                <a><i className='clipbord'><Assignment/>Assign</i></a>
                <a><i className='eye'><Visibility/>View</i></a>

            </div>

        </div>
    </div>
  )
}


