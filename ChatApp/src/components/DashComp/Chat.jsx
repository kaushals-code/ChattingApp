import React from "react";
import { giveStatus } from "../../Auth";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

function Chat(props) {

    const dat = giveStatus();

    const chat = dat.chats.find((sat) => sat.id === props.id);

    return (
        <>
            {/* // Chat Header */}
            <div className="chat-window">
                <ChatHeader name={chat.name} />

                {/* // Messages Area */}
                < div class="messages-area" id="messagesArea" ></div >

                {/* Input bar and Send btn */}
                < div className="input-bar" >
                    <ChatInput />
                </div >

            </div >
        </>
    );
}

export default Chat;