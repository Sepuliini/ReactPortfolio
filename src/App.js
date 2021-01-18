
import './App.css';
import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/routes';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-color" title="Severi Nättilä" scroll href="/">
            <Navigation>
                <Link to="/ReactPortfolio">Home</Link>
                 {/* <a href="https://github.com/Sepuliini" target="_blank" rel="noopener noreferrer">CV</a> */} 
                <Link to="/aboutme">About</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Severi Nättilä" href="/">
            <Navigation>
                <Link to="/ReactPortfolio">Home</Link>
                {/* <a href="https://github.com/Sepuliini" target="_blank" rel="noopener noreferrer">CV</a> */} 
                <Link to="/aboutme">About</Link>
                <Link to="/projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}



export default App;
