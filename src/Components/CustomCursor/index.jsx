import { useEffect, useRef, useState } from 'react';

import './CustomCursor.css'

import cursorDefault from 'images/Cursor/mouse-Default.svg';
import cursorBack from 'images/Cursor/mouse-Back.svg';
import cursorNext from 'images/Cursor/mouse-Next.svg';
import cursorPrev from 'images/Cursor/mouse-Prev.svg';
import cursorScopri from 'images/Cursor/mouse-Scopri.svg';



export default function CustomCursor({ setCustomCursorFunctions }) {
    var customCursor = useRef(null);
    
    useEffect( () => {
        
        if (customCursor) {
            setCustomCursorFunctions({cursorHovering, cursorNotHovering});

            console.log('cambiato');
            customCursor = customCursor.current;
            customCursor.src = cursorDefault;

            var adjustCursorPosition = function(event) {
                let cursorWidth = 10; // Larghezza dell'area di rilevamento dei bordi in pixel
                let screenWidth = window.innerWidth;
                let screenHeight = window.innerHeight;
                let mouseX = event.clientX;
                let mouseY = event.clientY;

                if (mouseX < 0 || mouseY < 0 || mouseX > screenWidth || mouseY > screenHeight)
                    document.body.style.cursor = cursorDefault;

                customCursor.style.left = (event.clientX - customCursor.width / 2) + 'px';
                customCursor.style.top = (event.clientY - customCursor.height / 2) + 'px';
                customCursor.style.display = 'block';
            };

            window.addEventListener ('mousemove', adjustCursorPosition);
            window.addEventListener('wheel', adjustCursorPosition);

        }

        /* document.querySelectorAll('.cursorScopri').forEach( (element) => {
            element.addEventListener('mouseenter', () => {
                cursorHovering(cursorScopri, true);
            });
            element.addEventListener('mouseleave', () => {
                cursorNotHovering(true);
            });
        });

        document.querySelectorAll('.backToHP').forEach( (element) => {
            element.addEventListener('mouseenter', () => {
                cursorHovering(cursorBack, true);
            });
            element.addEventListener('mouseleave', () => {
                cursorNotHovering(true);
            })
        }); */
    }, [customCursor]);
    
        //set cursor to svgSrc with animation
        function cursorHovering(svgSrc, animation_boolean = true) {
            if (svgSrc === 'ciao')
                customCursor.src = cursorScopri;
            if (animation_boolean)
                customCursor.style.transform = 'scale(3)';
        };

        function cursorNotHovering(animation_boolean = true) {
            customCursor.src = cursorDefault;
            if (animation_boolean)
                customCursor.style.transform = 'scale(1)';
        };



        
        

    return (
        <>
            <img id='customCursor' ref={customCursor}/>
        </>
    );
    
}