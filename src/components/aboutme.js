import React, { Component } from 'react';

import './aboutme.css';
import '../App.css'

import bunny from './Kuvat/glenda.jpeg';

class Aboutme extends Component {
    render() {
        return (
            <div className = "aboutme-grid">
               <div className="aboutme-banner">
                <img
                src={bunny}
                alt="profphoto"
                className="profile-img"
                />

                    <h2>About Me</h2>
                    <p>
                        Right now i'm focusing on learning more about Python programming, automation, data analysis 
                        and Fullstack webdeveloping using React
                    </p>
                    <p>
                        severi.nattila@gmail.com
                    </p>

               </div>
            </div>
        )
    }
}

export default Aboutme;