import {InstagramIcon} from "../icons/instagramIcon.tsx";
import "../styles/SocWrapper.scss"
import {FacebookIcon} from "../icons/facebookIcon.tsx";
import {YoutubeIcon} from "../icons/youtubeIcon.tsx";
import type {SocItemsType} from "../types/socItemsType.ts";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";
import {useEffect} from "react";
import {updateItems} from "../store/slices/socLinksSlice.tsx";


export default function SocLinks() {
    const dispatch = useDispatch();
    const {items, iconColor} = useSelector((state: RootState) => state.soc);
    useEffect(() => {
        const updatedItems: SocItemsType[] = [
            {
                id: '1',
                url: 'https://www.instagram.com/?flo=true',
                img: <InstagramIcon color={iconColor}/>,
            },
            {
                id: '2',
                url: 'https://www.facebook.com/',
                img: <FacebookIcon color={iconColor}/>,
            },
            {
                id: '3',
                url: 'https://www.youtube.com/',
                img: <YoutubeIcon color={iconColor}/>,
            },
        ];
        dispatch(updateItems(updatedItems));
    }, [dispatch, iconColor]);
    return (
        <nav className={'socLinks'}>
            {items.map((item) => (
                <div key={item.id} className={'itemWrapper'}>
                    <a href={item.url}>{item.img}</a>
                </div>
            ))}
        </nav>
    )
}