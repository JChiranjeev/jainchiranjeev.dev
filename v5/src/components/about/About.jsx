import React from "react";
import uuid from 'react-uuid';

import Theme1 from "../../themes/theme1";
import Data from "../../data/data";
import ProgrammerLightMode from "../../assets/illustrations/programming-lightmode.svg";
import ProgrammerDarkMode from "../../assets/illustrations/programming-darkmode.svg";
import "./About.css";

export default function About(props) {
    const techList01 = Data.techList1.map((tech) => {
        return (
            <li key={uuid()}>{tech}</li>
        )
    });
    const techList02 = Data.techList2.map((tech) => {
        return (
            <li key={uuid()}>{tech}</li>
        );
    });

    return (
        <div className="container w-100 d-flex align-items-center justify-content-center" style={{
            minHeight: "100vh"
        }}>
            <div style={{
                zIndex: 0
            }}>
                <div className="row">
                    <div className="col-md" data-aos="fade-up" data-aos-duration="1200"
                        data-aos-once="false" data-aos-easing="ease-in-out">
                        <div className="row px-md-5 px-2 py-4 my-2">
                            <div className="col-md">
                                <h1 style={{
                                    fontWeight: "700"
                                }}>
                                    About Me
                                </h1>
                            </div>
                        </div>
                        <div className="row px-md-5 px-2">
                            <h4 className="my-2">{Data.whoIAm}</h4>
                            <h6 className="my-2">{Data.whatIDo}</h6>
                        </div>
                        <div className="row px-md-5 px-2 py-4 my-2">
                            <span>Here are a few technologies that I've been working with recently.</span>
                            <div className="row mt-4 h6" style={{ lineHeight: "1.5rem" }}>
                                <div className="col-md-auto">
                                    <ul>
                                        {techList01}
                                    </ul>
                                </div>
                                <div className="col-md-auto">
                                    <ul>
                                        {techList02}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 px-3 py-3 my-2 mx-md-2" data-aos="fade-up" data-aos-duration="1500"
                        data-aos-once="false" data-aos-easing="ease-in-out" style={{
                        }}>
                        <div className="d-flex align-items-center justify-content-center" style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "2rem",
                            overflow: "hidden",
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <img src={props.darkMode ? ProgrammerDarkMode : ProgrammerLightMode}
                                className="img-responsive" alt="Programmer" data-aos="fade-up" data-aos-duration="1800"
                                data-aos-once="false" data-aos-easing="ease-in-out" style={{
                                    height: "100%",
                                }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}