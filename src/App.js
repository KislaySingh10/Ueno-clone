import React from 'react'
import Main from './components/Main'
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function App() {
    return (
        <div className="grid-container-main">
            <header className="row">
            <div className="brand">
                <a>ueno.</a>
            </div>
            <div>
                <a>SERVICES</a>
                <a>CLIENTS</a>
                <a>CAREERS</a>
                <a>ABOUT</a>
                <a className="contact">CONTACT</a>
            </div>
            </header>
            <main>
                <Main />
            </main>
            <footer className="row ">
                <div className="brand">
                    <a>ueno.</a>
                </div>
                <div className="row second">
                    <div className="button">Privacy</div>
                    <a className="sub-title"><TwitterIcon /></a>
                    <a className="sub-title"><GitHubIcon /></a>
                    <a className="sub-title"><FacebookIcon /></a>
                    <a className="sub-title"><LinkedInIcon /></a>
                    <a className="sub-title"><InstagramIcon /></a>
                </div>
            </footer>
    </div>
        
    )
}

export default App
