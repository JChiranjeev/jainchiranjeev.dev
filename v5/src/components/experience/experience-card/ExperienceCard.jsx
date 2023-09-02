import React from "react";
import uuid from "react-uuid";

import Theme1 from "../../../themes/theme1";
import OfficeLightMode from "../../../assets/icons/office-lightmode.svg";
import OfficeDarkMode from "../../../assets/icons/office-darkmode.svg";
import CalendarLightMode from "../../../assets/icons/calendar-lightmode.svg";
import CalendarDarkMode from "../../../assets/icons/calendar-darkmode.svg";
import "./ExperienceCard.css";

export default function ExperienceCard(props) {
    const workList = props.workList.map(work => {
        const descriptionList = work.descriptionList.map(item => <li key={uuid()}>{item}</li>);
        return (
            <div key={uuid()}>
                <h6 className="mx-4" style={{
                    fontWeight: "700"
                }}>{work.client}</h6>
                <ul className="mx-3" style={{
                    fontWeight: "700",
                    fontSize: "1rem"
                }}>{descriptionList}</ul>
            </div>
        )
    });
    const awardsList = props.awards.map(award => {
        return (
            <div key={uuid()} className="col-md my-1">
                <a type="button" className="btn h-100 w-100" href={`${award.awardUrl}`} target="_blank"
                    style={{
                        backgroundColor: props.darkMode ? Theme1.DarkPrimary : Theme1.Primary,
                        color: props.darkMode ? Theme1.OnDarkPrimary : Theme1.OnPrimary,
                        fontWeight: "700"
                    }}>{award.awardName}</a>
            </div>
        )
    })
    return (
        <div className="col-lg-5 col-11 me-2" data-aos="fade-up" data-aos-duration={props.dataAosDuration}
            data-aos-once="false" data-aos-easing="ease-in-out" style={{
                height: "75vh"
            }}>
            <div className="justify-content-center d-flex flex-column" style={{
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
                overflow: "hidden",
                backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer,
            }}>
                <div className="mx-4 my-4">
                    <h3 style={{
                        fontWeight: "700",
                    }}>{props.position}</h3>
                    {props.company &&
                        <div className="d-block align-items-center" style={{
                            fontSize: "1.2rem",
                            fontWeight: "600"
                        }}>
                            <img src={props.darkMode ? OfficeDarkMode : OfficeLightMode}
                                className="img-thumbnail my-0 px-0 py-0 me-2 align-text-bottom" style={{
                                    backgroundColor: "transparent",
                                    height: "1.4rem",
                                }}></img>
                            <a href={`${props.companyUrl}`}>{props.company}</a>
                        </div>
                    }
                    {(props.startDate && props.endDate) &&
                        <div className="d-block align-items-center" style={{
                            fontSize: "0.8rem",
                            fontWeight: "600"
                        }}>
                            <img src={props.darkMode ? CalendarDarkMode : CalendarLightMode}
                                className="img-thumbnail my-0 px-0 py-0 me-2 align-text-bottom" style={{
                                    backgroundColor: "transparent",
                                    height: "1.2rem",
                                }}></img>
                            {props.startDate} - {props.endDate}
                        </div>
                    }
                </div>
                <div className="card-list my-3 h-100" style={{
                    fontSize: "0.8rem",
                    fontWeight: "600",
                }}>
                    {workList}
                </div>
                {props.awards.length > 0 && (
                    <div className="row text-center mb-3 mx-2">
                        {awardsList}
                    </div>
                )}
            </div>
        </div>
    );
}