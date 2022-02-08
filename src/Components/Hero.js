import React, { Component } from 'react';
import img from './image/cover.png'

const Hero = ()=> {



   
        return (
            <div style={{
                width:"100%",
                height:"500px",
                backgroundColor:"yellow"
              }}>
                <img src={img} style={{width:"100%",height:"100%"}}/>
            </div>
        );
    
}

export default Hero;