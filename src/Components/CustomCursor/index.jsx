import { useEffect, useRef } from 'react';

import cursorDefault from 'images/Cursor/mouse-Default.svg';
import cursorBack from 'images/Cursor/mouse-Back.svg';
import cursorNext from 'images/Cursor/mouse-Next.svg';
import cursorPrev from 'images/Cursor/mouse-Prev.svg';
import cursorScopri from 'images/Cursor/mouse-Scopri.svg';


export default function CustomCursor( ) {
    
    useEffect( () => {
        var customCursor = document.getElementById('customCursor');
        customCursor.style.position = "fixed";
        customCursor.style.width = "32px";
        customCursor.style.height = "32px";
        customCursor.style.pointerEvents = "none";
        customCursor.style.zIndex = "999";
        customCursor.style.transition = 'transform 0.3s';
        customCursor.src = cursorDefault;
        customCursor.style.display = "none";

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

        //set cursor to svgSrc with animation
        function cursorHovering(svgSrc, animation_boolean = true) {
            customCursor.src = svgSrc;
            if (animation_boolean)
                customCursor.style.transform = 'scale(3)';
        };

        function cursorNotHovering(animation_boolean = true) {
            customCursor.src = cursorDefault;
            if (animation_boolean)
                customCursor.style.transform = 'scale(1)';
        };


        /* 
        document.getElementById('horizontalSection').addEventListener('mouseenter', () => {
            cursorHovering(cursorScopri, '', true);
        });

        document.getElementById('horizontalSection').addEventListener('mouseleave', () => {
            cursorNotHovering(true);
        }) */

        document.querySelectorAll('.cursorScopri').forEach( (element) => {
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
        });
    });
        

    return (
        <>
            <img id='customCursor'/>
        </>
    );
}

export function prova() {
    console.log('ciao');
}