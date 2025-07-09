import '@styles/App.scss'
import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import Contact from "@components/Contact";
import {useEffect} from 'react';
import OurTeam from "@components/OurTeam";
import RekSection from "@components/RekSection";

function App() {
    useEffect(() => {
        const hash = location.hash?.replace('#', '');
        if (hash) {
            const section = document.getElementById(hash);
            if (section) {
                section.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return (
        <>
            <Header/>
            <HeroSection/>
            <OurTeam/>
            <RekSection/>
            <Contact/>
        </>
    )
}

export default App
