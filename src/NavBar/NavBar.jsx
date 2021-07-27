import './NavBar.css';

import { FaHome, FaHandshake } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { GiSoapExperiment, GiRead, GiAbstract067 } from 'react-icons/gi';
import { useState } from 'react';


const NavBar = ({ onToggle, theme }) => {

    const [active, changeActive] = useState('home');
    return (
        <div className="nav-container">
            <div className="left">
                <div className={"nav-tile "+ (active==='home'?'active':'')} onClick={() => {changeActive('home')}}>
                    <div className="icon">
                        <FaHome size="5em" />
                    </div>
                    <div className="title">
                        Home
                    </div>
                </div>
                <div className={"nav-tile "+ (active==='projects'?'active':'')} onClick={() => {changeActive('projects')}}>
                    <div className="icon">
                        <GiAbstract067 size="5em" />
                    </div>
                    <div className="title">
                        Projects
                    </div>
                </div>
                <div className={"nav-tile "+ (active==='about'?'active':'')} onClick={() => {changeActive('about')}}>
                    <div className="icon">
                        <ImProfile size="5em" />
                    </div>
                    <div className="title">
                        About
                    </div>
                </div>
                <div className={"nav-tile "+ (active==='training'?'active':'')} onClick={() => {changeActive('training')}}>
                    <div className="icon">
                        <GiRead size="5em" />
                    </div>
                    <div className="title">
                        Training
                    </div>
                </div>
                <div className={"nav-tile "+ (active==='exp'?'active':'')} onClick={() => {changeActive('exp')}}>
                    <div className="icon">
                        <GiSoapExperiment size="5em" />
                    </div>
                    <div className="title">
                        Experiments
                    </div>
                </div>
                <div className={"nav-tile "+ (active==='contact'?'active':'')} onClick={() => {changeActive('contact')}}>
                    <div className="icon">
                        <FaHandshake size="5em" />
                    </div>
                    <div className="title">
                        Contact
                    </div>
                </div>
            </div>
            <div className="right">
                <input type="checkbox" id="toggle" className="toggle--checkbox" onChange={onToggle} checked={theme === 'dark'} />
                <label htmlFor="toggle" className="toggle--label">
                    <span className="toggle--label-background"></span>
                </label>
            </div>
        </div>
    )
}

export default NavBar

