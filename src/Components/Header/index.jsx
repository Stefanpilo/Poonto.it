import React, { useState } from "react";
import "./Header.css";
import logo from 'images/PoontoLogo.svg';
import burgerMenuClosed from 'images/burgerMenuClosed.svg';
import burgerMenuOpened from 'images/burgerMenuOpened.svg';


export default function Header() {
    return (
        <div id="header" className="flex boxed">
            <div>
              <img id="logo" src={logo} onClick={() => window.location = "/"} alt='logo'></img>
            </div>
            <div className="flex">
                <a id="diventa-button" href="/Contatti">Contatti</a>
                <BurgerMenu />                
            </div>
        </div>
    );
}

function BurgerMenu() {
    const [isOpened, setIsOpened] = useState(false);

    function clickHandler() {
        if (!isOpened)
            document.body.style.overflowY = "hidden";
        else 
            document.body.style.overflowY = "";
        setIsOpened(!isOpened);
    }

    return (
        <>
            <img id="burger-menu-icon" src={!isOpened ? burgerMenuClosed : burgerMenuOpened} onClick={clickHandler} alt='burgerMenuIcon'/>
            <div id="menu-dropdown-wrapper" className={isOpened ? "flex opened" : "flex"}>
                <div id="menu-pages-container" className="flex">
                    <span id="comunica-menu" className="poontoColor">Comunica.</span>
                    <span id="amplifica-menu" className="poontoColor">Amplifica.</span>
                    <span id="diventa-menu" className="poontoColor">Diventa.</span>
                    <span id="newoos-menu" className="poontoColor">Newoos</span>
                </div>
                <span id="privacy-policy">Privacy Policy</span>
            </div>
        </>
    );
}