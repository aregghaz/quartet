import '../styles/About.scss'
import Button from "./Button.tsx";
import {useSelector} from 'react-redux';
import {type RootState} from '../store/store.ts';
import AboutSlider from "./AboutSlider.tsx";


export default function About() {
    const {
        title,
        subtitle,
        paragraphs,
        finalNote,
        buttonText,
        infoNumber1,
        infoNumber2,
        infoNumber3,
        infoText1,
        infoText2,
        infoText3
    } = useSelector((state: RootState) => state.about);
    return (
        <section className="about">
            <div className="topContainer">
                <div className="aboutInfoWrapper">
                    <h3 style={{fontSize: "20px", paddingTop: "20px"}}>{title}</h3>
                    <h2>{subtitle}</h2>
                    {paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                    <h3>{finalNote}</h3>
                    <Button text={buttonText} buttonWidth={142} buttonHeight={41} style={{
                        backgroundColor: "#DBA14D",
                        color: "#000000",
                        fontSize: "14px",
                    }}/>
                </div>
                <div className="aboutSliderWrapper">
                    <AboutSlider/>
                </div>
            </div>
            <div className="lastInfo">
                <div>
                    <h2>{infoNumber1}</h2>
                    <p>{infoText1}</p>
                    <span></span>
                </div>
                <div>
                    <h2>{infoNumber2}</h2>
                    <p>{infoText2}</p>
                </div>
                <div>
                    <span></span>
                    <h2>{infoNumber3}</h2>
                    <p>{infoText3}</p>
                </div>
            </div>
        </section>
    )
}