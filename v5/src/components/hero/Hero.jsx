import React from "react";
import AnimatedText from 'react-animated-text-content';
import { TypeAnimation } from 'react-type-animation';

import Data from "../../data/data";
import Skills from "./skills/Skills";

import "./Hero.css";

export default function Hero(props) {
    return (
        <div className="vh-100 w-100 d-flex align-items-center justify-content-center" style={{
            minHeight: "100vh"
        }}>
            <div className="container px-4 py-4" style={{
                zIndex: 0
            }}>
                <div className="row my-3">
                    <span style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        maxWidth: "100vw"
                    }}>{Data.greeting}</span>
                    <AnimatedText
                        type="chars" // animate words or chars
                        animationType="blocks"
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        interval={0.10}
                        duration={1}
                        tag="span"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="10%"
                        style={{
                            fontSize: "3rem"
                        }}>
                        {`${Data.name}`}
                    </AnimatedText>
                    {/* <span style={{
                        fontSize: "3rem"
                    }}>{`${Data.firstName} ${Data.lastName}`}</span> */}
                    <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[2500, ...Data.introductionSequence]}
                        speed={50} // Custom Speed from 1-99 - Default Speed: 40
                        deletionSpeed={90}
                        style={{ fontSize: '1.8rem' }}
                        wrapper="span" // Animation will be rendered as a <span>
                        repeat={Infinity} // Repeat this Animation Sequence infinitely
                    />
                    <span style={{
                        fontSize: "1.8rem",
                        maxWidth: "100vw"
                    }}></span>
                </div>
                <div className="row">
                    <span style={{
                        fontSize: "1.1rem",
                        fontWeight: "600"
                    }}>
                        <Skills darkMode={props.darkMode}/>
                    </span>
                </div>
            </div>
        </div>
    );
}