import React from "react"
import "../styles/about-face-mask.css"


const MiniInfoModal = ({ children, currBtnState }) => (
    <div className={`info-modal ${currBtnState}`}>
        {children}
    </div>
);

export default MiniInfoModal
