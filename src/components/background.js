import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import { Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'


const projectGol = () => {
    window.open('https://github.com/Sepuliini/Game-of-Life', '_blank', "noopener noreferrer");
  }

const projectReact = () => {
    window.open('https://github.com/Sepuliini', '_blank', "noopener noreferrer");
  }  

class Background extends Component {
    render() {
        return (
            <div>
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Grid className="background-grid">
                        <Cell col={12}>
                        
                            <div className="banner-text">
                                <h1>
                                    Severi Nättilä
                                </h1>

                                <p> I'm a third year Mathematical Information technology student interested in all things Python programming, Data analysis and Webdeveloping using tools like React</p>

                                <div className="socials">
                                    {/* Github link */}
                                    <a href="https://github.com/Sepuliini" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </Cell>
                    </Grid> 
                </div>
                
                <div>
                <h2 className="projectText">
                    Projects
                </h2>
                </div>

                <div className="projects-grid">
                    <Grid >

                        <Cell col={12} >
                            <div className="project-display">
                                <div className="projs">

                                    <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                        <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/en/b/bc/Sierpinski_Gasket_in_Life.PNG) center / cover no-repeat' }}>Update</CardTitle>
                                        <CardText>Small project about Conways Game of life to get more familiar on Python and libraries suchs as numpy and matplotlib</CardText>
                                        <CardActions></CardActions>
                                        <Button colored onClick={projectGol} >Github</Button>
                                    </Card>

                                </div>
                                <div className="projs">
                                    <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                        <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover no-repeat' }}>
                                        </CardTitle>

                                        <CardText>Personal website of mine made with React using React-mdl</CardText>
                                        <CardActions></CardActions>
                                        <Button colored onClick={projectReact} >Github</Button>
                                    </Card>
                                </div>
                            </div>
                        </Cell>


                    </Grid>
                </div>
            </div>
        )
    }
}

export default Background;