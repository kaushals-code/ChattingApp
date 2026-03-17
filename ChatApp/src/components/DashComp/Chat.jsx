import React from "react";
import ChatHeader from "./ChatHeader";
import { giveStatus } from "../../Auth";

function Chat(props) {

    const dat = giveStatus();

    const chat = dat.chats.find((sat) => sat.id === props.id);

    return (
        <div className="chat-window">
            <ChatHeader name={chat.name} />
        </div>
    );
}

export default Chat;