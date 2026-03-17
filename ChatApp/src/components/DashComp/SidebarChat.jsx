import React from "react";
import avatarColors from "../../AvatarColors";

function SidebarChat(props) {

    // const color = avatarColors[Math.floor(Math.random() * avatarColors.length)];

    return (
        <>
            {/* <div className="chat-item" onClick={props.onClick}> */}
            <div className={`chat-item ${props.active ? "active" : ""}`} onClick={props.onClick}>
                <div className="avatar" style={{ background: avatarColors[Math.floor(Math.random() * avatarColors.length)] }}>
                    {props.name.replace(/[^\w\s]/gi, '').trim().split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                </div >
                <div className="chat-info">
                    <div className="chat-top">
                        <span className="chat-name">{props.name}</span>
                        <span className="chat-time">{props.time}</span>
                    </div>
                    <div className="chat-bottom">
                        <span className="chat-preview">{props.preview}</span>
                    </div>
                </div >
            </div>
        </>
    );
}

export default SidebarChat;