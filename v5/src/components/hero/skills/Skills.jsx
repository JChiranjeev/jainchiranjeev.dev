import React from "react";
import Marquee from "react-fast-marquee";
import uuid from "react-uuid";

import Data from "../../../data/data";
import Theme1 from "../../../themes/theme1";

import AndroidLightMode from "../../../assets/icons/skills/android-lightmode.svg";
import AngularLightMode from "../../../assets/icons/skills/angular-lightmode.svg";
import AzureDevOpsLightMode from "../../../assets/icons/skills/azuredevops-lightmode.svg";
import CsharpLightMode from "../../../assets/icons/skills/csharp-lightmode.svg";
import Css3LightMode from "../../../assets/icons/skills/css3-lightmode.svg";
import DotnetLightMode from "../../../assets/icons/skills/dotnet-lightmode.svg";
import FirebaseLightMode from "../../../assets/icons/skills/firebase-lightmode.svg";
import GitLightMode from "../../../assets/icons/skills/git-lightmode.svg";
import Html5LightMode from "../../../assets/icons/skills/html5-lightmode.svg";
import JavaLightMode from "../../../assets/icons/skills/java-lightmode.svg";
import MicrosoftAzureLightMode from "../../../assets/icons/skills/microsoftazure-lightmode.svg";
import MicrosoftSQLServerLightMode from "../../../assets/icons/skills/microsoftsqlserver-lightmode.svg";
import ReactLightMode from "../../../assets/icons/skills/react-lightmode.svg";
import AndroidDarkMode from "../../../assets/icons/skills/android-darkmode.svg";
import AngularDarkMode from "../../../assets/icons/skills/angular-darkmode.svg";
import AzureDevOpsDarkMode from "../../../assets/icons/skills/azuredevops-darkmode.svg";
import CsharpDarkMode from "../../../assets/icons/skills/csharp-darkmode.svg";
import Css3DarkMode from "../../../assets/icons/skills/css3-darkmode.svg";
import DotnetDarkMode from "../../../assets/icons/skills/dotnet-darkmode.svg";
import FirebaseDarkMode from "../../../assets/icons/skills/firebase-darkmode.svg";
import GitDarkMode from "../../../assets/icons/skills/git-darkmode.svg";
import Html5DarkMode from "../../../assets/icons/skills/html5-darkmode.svg";
import JavaDarkMode from "../../../assets/icons/skills/java-darkmode.svg";
import MicrosoftAzureDarkMode from "../../../assets/icons/skills/microsoftazure-darkmode.svg";
import MicrosoftSQLServerDarkMode from "../../../assets/icons/skills/microsoftsqlserver-darkmode.svg";
import ReactDarkMode from "../../../assets/icons/skills/react-darkmode.svg";

export default function Skills(props) {
    const skillsTags = Data.skills.map(skill => {
        return (
            <span key={uuid()} className="badge badge-pill mx-2 px-3 d-flex flex-wrap align-items-center" style={{
                backgroundColor: `${props.darkMode ? Theme1.DarkPrimaryContainer : Theme1.PrimaryContainer}`,
                color: `${props.darkMode ? Theme1.DarkOnPrimaryContainer : Theme1.OnPrimaryContainer}`,
                fontSize: "0.8rem",
                fontWeight: "600"
            }}>
                {/* <img src={[`${skill.iconName}${props.darkMode ? "LightMode" : "LightMode"}`]}
                    className="img-thumbnail mx-0 my-0 me-2 px-0 py-0" style={{
                        backgroundColor: "transparent",
                        height: "1.2rem",
                    }}></img> */}
                {skill.name}
            </span>
        )
    });

    return (
        <div className="d-flex align-items-center" style={{
            position: "absolute",
            bottom: "5rem"
        }}>
            <span className="d-inline me-3 align-middle">Skills:</span>
            <span>
                <Marquee className="d-inline align-middle w-50"
                    delay={2}
                    speed={20}
                    gradient={false}
                    gradientWidth={40}>
                    {skillsTags}
                    {/* This is a Test Sentence This is a Test Sentence This is a Test Sentence This is a Test Sentence */}
                </Marquee>
            </span>
        </div>
    );
}