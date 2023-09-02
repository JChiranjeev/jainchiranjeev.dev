import React from "react";
import uuid from "react-uuid";

import Theme1 from "../../themes/theme1";
import ExperienceCard from "./experience-card/ExperienceCard";
import ResumeLightMode from "../../assets/illustrations/resume-lightmode.svg";
import ResumeDarkMode from "../../assets/illustrations/resume-darkmode.svg";
import Data from "../../data/data";
import "./Experience.css";

export default function Experience(props) {
    const experienceCards = Data.experience.map(experience => {
        return (
            <ExperienceCard
                key={uuid()}
                darkMode={props.darkMode}
                dataAosDuration={experience.dataAosDuration}
                position={experience.position}
                company={experience.company}
                companyUrl={experience.companyUrl}
                startDate={experience.startDate}
                endDate={experience.endDate}
                workList={experience.workList}
                awards={experience.awards} />
        );
    });
    return (
        <div className="container d-flex align-items-center justify-content-center" style={{
            minHeight: "100vh"
        }}>
            <div style={{
                zIndex: 0,
                maxWidth: "100vw"
            }}>
                <div className="d-flex card-list mx-2">
                    <div className="col-lg-5 col-11 mx-2" data-aos="fade-up" data-aos-duration="1500"
                        data-aos-once="false" data-aos-easing="ease-in-out" style={{
                            height: "75vh"
                        }}>
                        <div className="align-items-center justify-content-center" style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "2rem",
                            overflow: "hidden",
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <h1 className="my-5 text-center" style={{
                                fontWeight: "700"
                            }}>
                                Work Experience
                            </h1>
                            <img src={props.darkMode ? ResumeDarkMode : ResumeLightMode}
                                className="img-fluid text-center" alt="Resume Illustration" data-aos="fade-up" data-aos-duration="1800"
                                data-aos-once="false" data-aos-easing="ease-in-out" style={{
                                    height: "70vh",
                                }}></img>
                        </div>
                    </div>
                    {experienceCards}
                </div>
            </div>
        </div>
    )
}