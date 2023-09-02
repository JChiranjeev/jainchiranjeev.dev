import React from "react";
import uuid from "react-uuid";

import Theme1 from "../../../themes/theme1";
import Data from "../../../data/data";
import ProjectsDarkMode from "../../../assets/illustrations/projects-darkmode.svg";
import ProjectsLightMode from "../../../assets/illustrations/projects-lightmode.svg";
import "./ProjectCard.css";

export default function ProjectCard(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4" style={{
            borderRadius: "2rem",
            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
        }}>
            <div className="align-items-center justify-content-center" style={{
                borderRadius: "2rem",
                backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
            }}>
                <h1 className="my-5 text-center" style={{
                    fontWeight: "700"
                }}>
                    My Projects
                </h1>
                <img src={props.darkMode ? ProjectsDarkMode : ProjectsLightMode}
                    className="img-fluid text-center w-100" alt="Resume Illustration" data-aos="fade-up" data-aos-duration="1800"
                    data-aos-once="false" data-aos-easing="ease-in-out"></img>
            </div>
        </div>
    );
}