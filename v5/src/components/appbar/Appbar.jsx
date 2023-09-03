import React from "react";
import Theme1 from "../../themes/theme1";
import './Appbar.css'

// import memeLogo from '../../assets/icons/meme-logo.png'


export default function Appbar(props) {
    return (
        <nav className="navbar fixed-top navbar-expand-lg w-100 px-5 py-3" style={{
            backgroundColor: "transparent",
            color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
        }}>
            <div className="container">
                <a className="navbar-brand" href="#" style={{
                    color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                }}>
                    {/* <img src={memeLogo} alt="Logo" className="d-inline-block align-text-top navbar-logo me-3 ms-2" /> */}
                    <strong>Portfolio</strong>
                </a>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{
                    color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                }}>
                    <ul className="navbar-nav ms-auto py-3">
                        <li className="nav-item">
                            <a className="nav-link py-3" aria-current="page" href="#" style={{
                                backgroundColor: "transparent",
                                color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                            }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3" aria-current="page" href="#" style={{
                                backgroundColor: "transparent",
                                color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                            }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3" aria-current="page" href="#" style={{
                                backgroundColor: "transparent",
                                color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                            }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-3" aria-current="page" href="#" style={{
                                backgroundColor: "transparent",
                                color: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                            }}>Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}