import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HorizontalCaseHistorySection.css'

export default function HorizontalCaseHistorySection() {
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
            pin: horizontalSectionPin,
            scrub: -1,
            invalidateOnRefresh: true
        });
    });

    return (
        <div id='horizontalSectionWrapper'>
            <div id='horizontalSection'>
                <div className='HPCaseHistory_column'></div>
                <div className='HPCaseHistory_column'></div>
                <div className='HPCaseHistory_column'></div>
            </div>
        </div>
    );
}