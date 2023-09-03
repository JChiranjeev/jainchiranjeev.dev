import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import Theme1 from "../../../themes/theme1";
import ClockWidget from "../../../assets/mockups/clockwidget.png";
import ClockWidgetDarkMode from "../../../assets/illustrations/projects/clockwidget-darkmode.svg";
import ClockWidgetLightMode from "../../../assets/illustrations/projects/clockwidget-lightmode.svg";
import CommunityConnect from "../../../assets/mockups/communityconnect.png";
import CommunityConnectDarkMode from "../../../assets/illustrations/projects/communityconnect-darkmode.svg";
import CommunityConnectLightMode from "../../../assets/illustrations/projects/communityconnect-lightmode.svg";
import GitProfile from "../../../assets/mockups/gitprofile.png";
import GitProfileDarkMode from "../../../assets/illustrations/projects/gitprofile-darkmode.svg";
import GitProfileLightMode from "../../../assets/illustrations/projects/gitprofile-lightmode.svg";
import InstantDownloader from "../../../assets/mockups/instantdownloader.png";
import InstantDownloaderDarkMode from "../../../assets/illustrations/projects/instantdownloader-darkmode.svg";
import InstantDownloaderLightMode from "../../../assets/illustrations/projects/instantdownloader-lightmode.svg";
import Notes from "../../../assets/mockups/notes.png";
import NotesDarkMode from "../../../assets/illustrations/projects/notes-darkmode.svg";
import NotesLightMode from "../../../assets/illustrations/projects/notes-lightmode.svg";
import OfflineNotes from "../../../assets/mockups/offlinenotes.png";
import OfflineNotesDarkMode from "../../../assets/illustrations/projects/offlinenotes-darkmode.svg";
import OfflineNotesLightMode from "../../../assets/illustrations/projects/offlinenotes-lightmode.svg";
import UnitConverter from "../../../assets/mockups/unitconverter.png";
import UnitConverterDarkMode from "../../../assets/illustrations/projects/unitconverter-darkmode.svg";
import UnitConverterLightMode from "../../../assets/illustrations/projects/unitconverter-lightmode.svg";
import Wally from "../../../assets/mockups/wally.png";
import WallyDarkMode from "../../../assets/illustrations/projects/wally-darkmode.svg";
import WallyLightMode from "../../../assets/illustrations/projects/wally-lightmode.svg";
import "./ProjectCard.css";

export default function ProjectCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getMockup = (illustrationName) => {
        if (illustrationName === 'ClockWidget') {
            return ClockWidget
        } else if (illustrationName === 'CommunityConnect') {
            return CommunityConnect
        } else if (illustrationName === 'GitProfile') {
            return GitProfile
        } else if (illustrationName === 'InstantDownloader') {
            return InstantDownloader
        } else if (illustrationName === 'Notes') {
            return Notes
        } else if (illustrationName === 'OfflineNotes') {
            return OfflineNotes
        } else if (illustrationName === 'UnitConverter') {
            return UnitConverter
        } else if (illustrationName === 'Wally') {
            return Wally
        }
    }

    const getIllustration = (darkMode, illustrationName) => {
        if (darkMode) {
            if (illustrationName === 'ClockWidget') {
                return ClockWidgetDarkMode
            } else if (illustrationName === 'CommunityConnect') {
                return CommunityConnectDarkMode
            } else if (illustrationName === 'GitProfile') {
                return GitProfileDarkMode
            } else if (illustrationName === 'InstantDownloader') {
                return InstantDownloaderDarkMode
            } else if (illustrationName === 'Notes') {
                return NotesDarkMode
            } else if (illustrationName === 'OfflineNotes') {
                return OfflineNotesDarkMode
            } else if (illustrationName === 'UnitConverter') {
                return UnitConverterDarkMode
            } else if (illustrationName === 'Wally') {
                return WallyDarkMode
            }
        }
        else {
            if (illustrationName === 'ClockWidget') {
                return ClockWidgetLightMode
            } else if (illustrationName === 'CommunityConnect') {
                return CommunityConnectLightMode
            } else if (illustrationName === 'GitProfile') {
                return GitProfileLightMode
            } else if (illustrationName === 'InstantDownloader') {
                return InstantDownloaderLightMode
            } else if (illustrationName === 'Notes') {
                return NotesLightMode
            } else if (illustrationName === 'OfflineNotes') {
                return OfflineNotesLightMode
            } else if (illustrationName === 'UnitConverter') {
                return UnitConverterLightMode
            } else if (illustrationName === 'Wally') {
                return WallyLightMode
            }
        }
    }
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 px-2 py-2" style={{
            borderRadius: "2rem"
        }}>
            <div className="card pt-2 h-100" style={{
                borderRadius: "2rem",
                backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
            }}>
                <div className="mx-4 my-4 card-body d-flex flex-column">
                    <img src={getIllustration(props.darkMode, props.illustrationName)}
                        className="img-thumbnail mt-0 mb-4 px-0 py-0 me-2 align-text-bottom" style={{
                            backgroundColor: "transparent",
                            border: "none",
                            width: "100%"
                        }}></img>
                    <h3 style={{
                        fontWeight: "700",
                    }}>{props.title}</h3>
                    <div className="card-list my-3" style={{
                        fontSize: "0.8rem",
                        fontWeight: "600",
                    }}>
                        <h6 style={{
                            fontWeight: "700"
                        }}>{props.description}</h6>
                    </div>

                    <Button className="mt-auto btn btn-lg btn-block btn-light" onClick={handleShow} style={{
                        backgroundColor: props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer,
                        color: props.darkMode ? Theme1.DarkPrimaryContainer : Theme1.PrimaryContainer,
                        border: "none"
                    }}>
                        Project Details
                    </Button>

                    <Modal show={show} onHide={handleClose} centered size="lg">
                        <Modal.Header closeButton style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <Modal.Title><strong>{props.title}</strong></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                            <img src={getMockup(props.illustrationName)}
                                className="img-thumbnail mt-0 mb-4 px-0 py-0 me-2 align-text-bottom" style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    width: "100%"
                                }}></img>
                            <h5 className="mb-4"><strong>{props.description}</strong></h5>
                        </Modal.Body>
                        <Modal.Footer style={{
                            backgroundColor: props.darkMode ? Theme1.DarkSecondaryContainer : Theme1.SecondaryContainer,
                            color: props.darkMode ? Theme1.DarkOnSecondaryContainer : Theme1.OnSecondaryContainer
                        }}>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div >
    );
}