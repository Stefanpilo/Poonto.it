import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalCaseHistorySection.css'

import cosenzaBackground_img from 'images/Cosenza background img.jpg';
import edenBackground_img from 'images/Eden background img.jpg';
import titoffBacground_img from 'images/Titoff case history background img.jpg';
import CustomCursor from 'Components/CustomCursor';

export default function HorizontalCaseHistorySection({ customCursorFunctions }) {

    useEffect( () => {
        console.log(customCursorFunctions);
    }, [customCursorFunctions])
    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        let horizontalSection = document.getElementById("horizontalSection");
        let horizontalSectionPin = document.getElementById("horizontalSectionPin");
        
        ScrollTrigger.create({
            animation: gsap.to(horizontalSection, {
                ease: "none",
                x: () => horizontalSection.scrollWidth * -1,
                xPercent: 100
            }),
            trigger: horizontalSection,
            start: 'center center',
            end: () => '+=' + (horizontalSection.scrollWidth * 0.5),
            pin: horizontalSectionPin,
            scrub: 1,
            invalidateOnRefresh: true
        });

        ScrollTrigger.create({
            animation: gsap.to('.parallaxText', {
                ease: 'none',
                xPercent: -50
            }),
            trigger: horizontalSection,
            start: 'center center',
            end: () => '+=' + (horizontalSection.scrollWidth * 0.5),
            pin: false,
            scrub: 1,
            invalidateOnRefresh: true
        });
    }, []);

    return (
        <div id='horizontalSectionWrapper'>
            <div id='horizontalSection'>
            <div className='HPCaseHistory_column' >
                    <img className='cursorScopri' src={cosenzaBackground_img} />
                    <p className='parallaxText'>Cosenza</p>
                </div>
                <div className='HPCaseHistory_column'>
                    <img className='cursorScopri' src={edenBackground_img} />
                    <p className='parallaxText'>Eden</p>
                </div>
                <div className='HPCaseHistory_column'>
                    <img className='cursorScopri' src={titoffBacground_img} />
                    <p className='parallaxText'>Titoff</p>
                </div>
                <div className='HPCaseHistory_column'>
                    <img className='cursorScopri' src={cosenzaBackground_img} />
                    <p className='parallaxText'>Cosenza</p>
                </div>
                <div className='HPCaseHistory_column'>
                    <img className='cursorScopri' src={edenBackground_img} />
                    <p className='parallaxText'>Eden</p>
                </div>
                <div className='HPCaseHistory_column'>
                    <img className='cursorScopri' src={titoffBacground_img} />
                    <p className='parallaxText'>Titoff</p>
                </div>
            </div>
        </div>
    );
}