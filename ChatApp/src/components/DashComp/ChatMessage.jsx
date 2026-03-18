import React from "react";

function ChatMessage(props) {
    return (
        <div className={`msg-row ${props.type}`}>
            <div className="bubble">
                <div className="msg-text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default ChatMessage;