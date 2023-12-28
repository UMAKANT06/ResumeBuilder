import React from "react"
import { Box, Button, Divider, Paper } from "@mui/material";
import NavBar from './NavBar';
import Picture from '../Static/bgg.jpg'
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const Home = () => {
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
    const navigate=useNavigate();
    return (
        <div>
            <NavBar></NavBar>
          
            <div
                style={{
                    background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
                    fontFamily: "'Roboto Slab', serif",
                }}
            >
                <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
                    <motion.div
                        className="grid grid-cols-12 pt-12 md:pt-24"
                        initial={{ opacity: 0 }}
                        animate={animationEffectsFirstLoad}
                        transition={transtionEffects}
                    >
           
                        <motion.img src={Picture} className="w-6/12 sm:w-9/12"
                            onMouseEnter={() => {
                                controls.start(animationEffectsHoverEnter, transtionEffects);
                            }}
                            onMouseLeave={() => {
                                controls.start(animationEffectsHoverLeave, transtionEffects);
                            }}
                            animate={controls} style={{ width: "50%", height: "50%", marginTop: 110, marginRight: 800, borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)" }} />
                        <div className="col-span-12 sm:col-span-8">
                            <h3 className="text-xl md:text-2xl mb-2 text-resume-400" style={{ color: '#4C667E', fontSize: 30, marginRight: -1015, marginTop: -600 }}>SIMPLEST WAY TO BUILD A</h3>
                            <h1 className="text-5xl mb-12 text-resume-800" style={{ color: '#1C2C3A', fontSize: 50, marginTop: -20, marginRight: -1120, marginBottom: 80 }}>Professional Resume</h1>
                            <p style={{ fontSize: 22, color: '#4C667E', marginLeft: 600, fontSize: 55, marginTop: -75, borderRadius: 5 }} >|</p>
                            <div className="flex mb-10">
                                <div className="bg-resume-800 w-1 rounded-lg"></div>
                                <p className="text-lg ml-3 text-resume-800" style={{ fontSize: 22, color: '#4C667E', marginTop: -120, marginLeft: 850 }}>
                                    &ldquo;The secret to getting ahead is getting started&rdquo;
                                    <br style={{ fontSize: 22, color: '#4C667E', marginLeft: -250, marginTop: -10 }} />
                                    —Mark Twain
                                </p>
                            </div>

                            <Button  onClick={() => navigate('/Profile')} variant="contained" className="bg-resume-800 mb-2" style={{ fontSize: 19, marginLeft: 835, marginTop: 60, color: 'white', borderRadius: 5, alignContent: 'center' }}>
                                BUILD YOUR RESUME
                            </Button>


                        </div>
                    </motion.div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Home