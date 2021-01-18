import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl'

const projectGol = () => {
    window.open('https://github.com/Sepuliini/Game-of-Life', '_blank');
  }

const projectReact = () => {
    window.open('https://github.com/Sepuliini', '_blank');
  }  

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid">
            <Grid >
               <Cell col={12} >
                        <div className="project-display">
                            <div className="projs">

                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/en/b/bc/Sierpinski_Gasket_in_Life.PNG) center / cover no-repeat' }}>Update</CardTitle>
                                <CardText>Conways Game of life to get more familiar with Python and libraries like numpy and matplotlib</CardText>
                                <CardActions></CardActions>
                                <Button colored onClick={projectGol} >Github</Button>
                            </Card>

                            
                
                            </div>
                            <div className="projs">
                            <Card shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                                <CardTitle expand style={{ color: '#fff', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png) center / cover no-repeat' }}>
                                </CardTitle>

                                <CardText>Personal website of mine made with React and React-mdl</CardText>
                                <CardActions></CardActions>
                                <Button colored onClick={projectReact} >Github</Button>
                            </Card>
                            </div>
                        </div>
                    </Cell>
               </Grid>


            </div>
        )
    }
}

export default Projects;