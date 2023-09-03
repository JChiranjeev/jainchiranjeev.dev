import React from "react";
import uuid from "react-uuid";

import Theme1 from "../../themes/theme1";
import Data from "../../data/data";
import ProjectsDarkMode from "../../assets/illustrations/projects-darkmode.svg";
import ProjectsLightMode from "../../assets/illustrations/projects-lightmode.svg";
import ProjectCard from "./project-card/ProjectCard";
import "./Projects.css";

export default function Projects(props) {
    const projectCards = Data.projects.map(project => {
        return (
            <ProjectCard
                key={uuid()}
                darkMode={props.darkMode}
                dataAosDuration={project.dataAosDuration}
                title={project.title}
                description={project.description}
                illustrationName={project.illustrationName}
                url={project.url}
                playStoreUrl={project.playStoreUrl}
                githubUrl={project.githubUrl}
            />
        )
    });
    return (
        <div className="container align-items-center justify-content-center py-5" style={{
            minHeight: "100vh",
            overflow: "hidden"
        }}>
            <div className="row px-2 py-2">
                <div className="col-sm-12 col-md-6 col-lg-4 px-2 py-2" style={{
                    borderRadius: "2rem"
                }}>
                    <div className="card align-items-center justify-content-center py-2 h-100" style={{
                        borderRadius: "2rem",
                        backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                        color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                    }}>
                        <div className="card-body">
                            <h1 className="mt-5 text-center" style={{
                                fontWeight: "700"
                            }}>
                                Personal Projects
                            </h1>
                            <img src={props.darkMode ? ProjectsDarkMode : ProjectsLightMode}
                                className="img-fluid text-center w-100" alt="Projects Illustration" data-aos="fade-up" data-aos-duration="1800"
                                data-aos-once="false" data-aos-easing="ease-in-out"></img>
                        </div>
                    </div>
                </div>
                {projectCards}
            </div>
        </div>
    );
}