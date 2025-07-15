import '@styles/App.scss'
import Header from "@components/Header";
// import HeroSection from "@components/HeroSection";
import Contact from "@components/Contact";
import {useEffect} from 'react';
import OurTeam from "@components/OurTeam";
import RekSection from "@components/RekSection";
import Services from "@components/Services";
import GuestArtists from "@components/GuestArtists";
import Portfolio from "@components/Portfolio";
import {Route, Routes, useLocation} from "react-router-dom";
import ArtistPage from "@components/ArtistPage";

function App() {
    const location = useLocation();
    const isArtistPage = location.pathname.startsWith('/artists/');

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
            {!isArtistPage && <Header />}

            <Routes>
                <Route path="/" element={
                    <>
                        <Portfolio />
                        <OurTeam />
                        <RekSection />
                        <Services />
                        <GuestArtists />
                        <Contact />
                    </>
                } />
                <Route path="/artists/:artistId" element={<ArtistPage />} />
            </Routes>
        </>
    )
}

export default App
