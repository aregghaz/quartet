import type {FC} from "react";

type FacebookIconProps={
    width?: number,
    height?: number,
    color?: string
}

export const FacebookIcon:FC<FacebookIconProps> = ({width=20, height=20, color}) => (
    <svg
        fill={color}
        width={width}
        height={height}
        viewBox="0 -2 24 24"
        id="facebook"
        data-name="Flat Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon flat-color"
    >
        <path
            id="primary"
            d="M14,6h3a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H14A5,5,0,0,0,9,7v3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9v7a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V14h2.22a1,1,0,0,0,1-.76l.5-2a1,1,0,0,0-1-1.24H13V7A1,1,0,0,1,14,6Z"

        />
    </svg>
);
