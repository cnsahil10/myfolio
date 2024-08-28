import React from 'react'
import './Port.css'
import cv from '../Components/sahil-resume.pdf'; 
import myimage from './myimage.png'

const Port = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
            <div>
             <h2>ABCD.</h2>
             <p id='ui'>ui designer</p>
            </div>
            <div className='list'>
                <ul>
                    <li>fb</li>
                    <li>tw</li>
                    <li>in</li>
                </ul>
            </div>
            <div className='list'>
                <ul>
                    <li>latest work</li>
                    <li>blog</li>
                    <li>contact</li>
                </ul>
            </div>

        </div>
        <div className="content">
          <div className="verticalcolor">  
          </div>
          <div className="vertical">
          </div>
          <div className="horizontalcolor">
          </div>
          <div className="desc">
            <h2 className='me'>Breathing in the aroms of creativity</h2>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos veritatis Reprehenderit!</p>
            <h3><a href=""><u>LEARN MORE</u></a></h3>
          </div>
          <div className="portrait">
            <img src={myimage} alt="" />
          </div>
          <div className="abcd">
            <h1 className='outline'>ABCD</h1>
          </div>
          <div className="footer">
            
              <h3 className='cv'><a href={cv}><u>download cv</u></a></h3>
              <h3 className='cv'><a href={cv}><u>about</u></a></h3>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Port
