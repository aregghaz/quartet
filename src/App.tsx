import './styles/App.scss'
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import About from "./components/About.tsx";

import { useEffect } from 'react';
import OurTeam from "./components/OurTeam.tsx";




function App() {
    useEffect(() => {
        const hash = location.hash?.replace('#', '');
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return (
        <>
            <Header/>
            <HeroSection/>
            <About/>
            <OurTeam/>
        </>
    )
}

export default App
