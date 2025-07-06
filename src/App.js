import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './styles/App.scss';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import { useEffect } from 'react';
import OurTeam from "./components/OurTeam";
import RekSection from "./components/RekSection";
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(HeroSection, {}), _jsx(About, {}), _jsx(RekSection, {}), _jsx(OurTeam, {})] }));
}
export default App;
