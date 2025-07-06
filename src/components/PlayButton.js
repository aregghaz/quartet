import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/playButton.scss';
import { playPause, setCurrentTime, setMediaSrc, toggleVideoOpen } from '../store/slices/mediaSlice';
const PlayButton = ({ onClick, color = '#FF5733', mediaSrc }) => {
    const dispatch = useDispatch();
    const { isPlaying, currentTime, isVideoOpen } = useSelector((state) => state.media);
    const videoRef = useRef(null);
    useEffect(() => {
        dispatch(setMediaSrc(mediaSrc));
    }, [mediaSrc, dispatch]);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
            if (isPlaying && isVideoOpen) {
                videoRef.current.play().catch(error => console.error('Error playing video:', error));
            }
            else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying, currentTime, isVideoOpen]);
    const handleClick = () => {
        dispatch(toggleVideoOpen());
        if (isVideoOpen)
            dispatch(playPause());
        if (onClick)
            onClick();
    };
    return (_jsxs(_Fragment, { children: [_jsx("video", { ref: videoRef, src: mediaSrc, style: { display: isVideoOpen ? 'block' : 'none', width: '100%', maxWidth: '600px' }, onTimeUpdate: () => {
                    if (videoRef.current)
                        dispatch(setCurrentTime(videoRef.current.currentTime));
                } }), _jsx("button", { className: `play-button ${isPlaying ? 'playing' : ''}`, onClick: handleClick, style: {
                    backgroundColor: color,
                }, children: _jsx("span", { className: `play-triangle` }) })] }));
};
export default PlayButton;
