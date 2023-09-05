import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import uuid from "react-uuid";

import Theme1 from "../../../themes/theme1";
import OfficeLightMode from "../../../assets/icons/office-lightmode.svg";
import OfficeDarkMode from "../../../assets/icons/office-darkmode.svg";
import CalendarLightMode from "../../../assets/icons/calendar-lightmode.svg";
import CalendarDarkMode from "../../../assets/icons/calendar-darkmode.svg";
import "./WorkCard.css";

export default function WorkCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const workDescription = props.workDescription.map(work => {
        const descriptionList = work.descriptionList.map(item => <li key={uuid()}>{item}</li>);
        return (
            <div key={uuid()}>
                <h6 className="mx-4" style={{
                    fontWeight: "700"
                }}>{work.client}</h6>
                <ul style={{
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
    });
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 px-2 py-2" style={{
            borderRadius: "2rem"
        }}>
            <div className="card align-items-center justify-content-center pt-2 h-100" data-aos="fade-up" data-aos-duration={props.dataAosDuration} data-aos-once="false" data-aos-easing="ease-in-out"
                style={{
                    borderRadius: "2rem",
                    backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                    color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                }}>
                <div className="mx-4 my-4 card-body d-flex flex-column">
                    <div className="embed-responsive">
                        <iframe className="mb-3 w-100"
                            src={props.coordinates}
                            style={{
                                borderRadius: "1rem",
                                border: 0
                            }}></iframe>
                    </div>
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
                            fontSize: "1rem",
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
                    <div className="card-list my-3" style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                    }}>
                        <h6 style={{
                            fontWeight: "700"
                        }}>{props.workSummary}</h6>
                    </div>

                    <Button className="mt-auto btn btn-lg btn-block btn-light" onClick={handleShow} style={{
                        backgroundColor: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                        color: props.darkMode ? Theme1.DarkPrimaryContainer : Theme1.PrimaryContainer,
                        border: "none"
                    }}>
                        Work Description
                    </Button>

                    <Modal show={show} onHide={handleClose} centered size="lg">
                        <Modal.Header closeButton style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <Modal.Title><strong>Company: {props.company}</strong></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <h5 className="mb-4"><strong>Position: {props.position}</strong></h5>
                            {workDescription}
                        </Modal.Body>
                        <Modal.Footer style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            {awardsList}
                            {/* <Button className="mt-auto btn btn-lg btn-block btn-light" onClick={handleClose} style={{
                                backgroundColor: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                                color: props.darkMode ? Theme1.DarkPrimaryContainer : Theme1.PrimaryContainer,
                                border: "none"
                            }}>
                                Close
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div >
    );
}