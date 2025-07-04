import "../styles/heroSection.scss"
import heroImg from '../assets/images/hero.jpg';
import ingaImg from '../assets/images/ingaImg.png';
import Button from "./Button.tsx";
import PlayButton from "./PlayButton.tsx";

export default function HeroSection() {
    const handlePlayClick = () => {
        alert('Play button clicked!');
    };
    const color = "rgba(255, 136, 0, 1)"
    return (
        <section className={'heroSection'} id="heroSection">
            <img className={'heroImage'} width={"100%"} height={"100%"} src={heroImg} alt="hero image"/>
            <div className={'globWrapper'}>
                <div className={'contentWrapper'}>
                    <div className={'firstTitle'}>
                        <div className={"line"}></div>
                        <p>Sonic pleasure awaits</p>
                    </div>
                    <div className={'globTitle'}>
                        <h1>Am music lab <p>by</p> Armen <p>Martirosyan</p></h1>
                    </div>
                    <div className={'infoText'}>
                        <h2>AM Music Lab is more than a band — it's a sonic laboratory where tradition meets
                            experimentation, and borders dissolve in sound.
                        </h2>
                    </div>
                    <div className={'buttonsWrapper'}>
                        <Button
                            url={''}
                            buttonWidth={150}
                            buttonHeight={40}
                            text={'Button 1'}
                            style={{
                                backgroundColor: color,
                                color: "#fff"
                            }}
                        />
                        <Button
                            url={''}
                            buttonWidth={150}
                            buttonHeight={40}
                            text={'Button2'}
                            style={{
                                backgroundColor: "#fff",
                                color: color
                            }}
                        />
                    </div>
                </div>
                <div className={'rekWrapper'}>
                    <div className={'playContainer'}>
                        <div className={'imgContainer'}>
                            <img className={'heroImage'} width={"100%"} height={"100%"} src={ingaImg} alt="hero image"/>
                        </div>
                        <div className={'contentContainer'}>
                            <div className={'infoContainer'}>
                                <div className={'topContainer'}>
                                    <p className={'singerName'}>Inga Arshakyans - Aprelu April</p>
                                    <p className={'authorName'}>Lyrics by Avet Barseghyan</p>
                                </div>
                                <PlayButton mediaSrc={'../video/heroVideo.mp4'} onClick={handlePlayClick} color={"#FFBE10FF"} size={60}  />
                            </div>
                            <hr />
                            <p className={'views'}>6 631 636 Views</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};