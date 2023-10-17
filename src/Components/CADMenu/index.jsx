import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./CADMenu.css";

export default function CADMenu ({ animation, cannotClick}) {
    const [animationFinished, setAnimationFinished] = useState(false);
    const { pathname } = useLocation();

    console.log("animation: " + animation);
    console.log("cannotclick: " + cannotClick)
    window.history.replaceState({}, {});


    return (
        <div id='CADMenu' className={animationFinished ? animation + 'ed' : animation} onAnimationEnd={ () => setAnimationFinished(true)}>
            <Link to='/Comunica' className={cannotClick === 'comunica' ? 'disabled' : ''} state={pathname}>Comunica.</Link><br/>
            <Link to='/Amplifica' className={cannotClick === 'amplifica' ? 'disabled' : ''} state={pathname}>Amplifica.</Link><br/>
            <Link to='/Diventa' className={cannotClick === 'diventa' ? 'disabled' : ''} state={pathname}>Diventa.</Link><br/>
        </div>
    );
}