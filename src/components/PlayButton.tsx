import type { FC } from 'react';
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/playButton.scss';
import { playPause, setCurrentTime, setMediaSrc, toggleVideoOpen } from '../store/slices/mediaSlice';
import { type RootState } from '../store/store';
import type {PlayButtonProps} from "../types/playButtonType.ts";


const PlayButton: FC<PlayButtonProps> = ({ onClick, color = '#FF5733', mediaSrc }) => {
    const dispatch = useDispatch();
    const { isPlaying, currentTime, isVideoOpen } = useSelector((state: RootState) => state.media);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        dispatch(setMediaSrc(mediaSrc));
    }, [mediaSrc, dispatch]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
            if (isPlaying && isVideoOpen) {
                videoRef.current.play().catch(error => console.error('Error playing video:', error));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, currentTime, isVideoOpen]);

    const handleClick = () => {
        dispatch(toggleVideoOpen());
        if (isVideoOpen) dispatch(playPause());
        if (onClick) onClick();
    };

    return (
        <>
            <video
                ref={videoRef}
                src={mediaSrc}
                style={{ display: isVideoOpen ? 'block' : 'none', width: '100%', maxWidth: '600px' }}
                onTimeUpdate={() => {
                    if (videoRef.current) dispatch(setCurrentTime(videoRef.current.currentTime));
                }}
            />
            <button
                className={`play-button ${isPlaying ? 'playing' : ''}`}
                onClick={handleClick}
                style={{
                    backgroundColor: color,
                }}
            >
                <span className={`play-triangle`}></span>
            </button>
        </>
    );
};

export default PlayButton;