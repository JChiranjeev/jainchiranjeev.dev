import React from "react";
import uuid from "react-uuid";

import Theme1 from "../../themes/theme1";
import ResumeLightMode from "../../assets/illustrations/resume-lightmode.svg";
import ResumeDarkMode from "../../assets/illustrations/resume-darkmode.svg";
import WorkCard from "./work-card/WorkCard";
import Data from "../../data/data";
import "./Work.css";

export default function Work(props) {
    const workCards = Data.work.map(work => {
        return (
            <WorkCard
                key={uuid()}
                darkMode={props.darkMode}
                dataAosDuration={work.dataAosDuration}
                position={work.position}
                company={work.company}
                companyUrl={work.companyUrl}
                startDate={work.startDate}
                endDate={work.endDate}
                coordinates={work.coordinates}
                workDescription={work.workDescription}
                workSummary={work.workSummary}
                awards={work.awards} />
        );
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
                                Work Experience
                            </h1>
                            <img src={props.darkMode ? ResumeDarkMode : ResumeLightMode}
                                className="img-fluid text-center w-100" alt="Resume Illustration" data-aos="fade-up" data-aos-duration="1800"
                                data-aos-once="false" data-aos-easing="ease-in-out"></img>
                        </div>
                    </div>
                </div>
                {workCards}
            </div>
        </div>
    )
}