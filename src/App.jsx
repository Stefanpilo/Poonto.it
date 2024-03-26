import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Home from 'Pages/Home';
import Comunica from 'Pages/Comunica';
import Amplifica from 'Pages/Amplifica';
import Diventa from 'Pages/Diventa';
import PageNotFound from 'Pages/PageNotFound';

import Header from 'Components/Header';
import CustomCursor from 'Components/CustomCursor';

import { useState, useRef } from 'react';

export default function App() {
    const [customCursorFunctions, setCustomCursorFunctions] = useState({});

    return (
        <>
            <LenisScroll />
            <Header />
            <CustomCursor setCustomCursorFunctions={setCustomCursorFunctions} />
            <BrowserRouter>
                <Routes>
                    {/*https://legacy.reactjs.org/docs/context.html*/}
                    <Route path="/" element={<Home customCursorFunctions={customCursorFunctions} />} />
                    <Route path="/Comunica" element={<Comunica />} />
                    <Route path="/Amplifica" element={<Amplifica />} />
                    <Route path="/Diventa" element={<Diventa />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

function LenisScroll() {
    const lenis = new Lenis( {
        lerp: 0.05,
        smoothWheel: true,
        orientation: 'vertical'
    });

    /*lenis.on('scroll', (e) => {
        console.log(e);
    });*/

    function raf(time) {
        if (lenis) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
    };

    requestAnimationFrame(raf);   
}