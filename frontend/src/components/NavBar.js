import React from "react";
import NavImage from '../Static/resume.png';
import { motion, useAnimation } from 'framer-motion';

const NavBar = () => {
    const controls = useAnimation();
    const animationEffectsHoverEnter = { scale: 1.05 };
    const animationEffectsHoverLeave = { scale: 1 };
    const animationEffectsFirstLoad = {
        scale: [0.9, 1],
        opacity: [0, 1],
    };
    const transtionEffects = {
        type: 'spring',
        stiffness: 400,
        damping: 17,
    };
    return (
        <nav style={{ backgroundColor: "#4C667E", color: "white", flex: 1, boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)" }}>
            <div className="navbar-container">
                <ul className="nav-list" style={{ listStyleType: "none", margin: 0, padding: 10 }}>
                    <li style={{ display: "inline", margin: "0 90px" }}>
                        <a href="/" style={{ color: "white", textDecoration: "none" }}>
                            <motion.img onMouseEnter={() => {
                                controls.start(animationEffectsHoverEnter, transtionEffects);
                            }}
                                onMouseLeave={() => {
                                    controls.start(animationEffectsHoverLeave, transtionEffects);
                                }}
                                animate={controls} src={NavImage} style={{ height: "3%", width: "3%", marginTop: 10, marginBottom: -30, marginLeft: -490 }} />
                        </a>
                    </li>
                    <li style={{ display: "inline", marginRight: 790, marginBottom: "0 300px" }}><a href="/" style={{ color: "white", textDecoration: "none", fontSize: 50, marginLeft: -490 }}>Intelli Career</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
