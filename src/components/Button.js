import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ buttonWidth, buttonHeight, text, style: customStyle }) => {
    const buttonStyles = {
        width: buttonWidth,
        height: buttonHeight,
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        ...customStyle
    };
    return (_jsx("button", { style: buttonStyles, children: text }));
};
export default Button;
