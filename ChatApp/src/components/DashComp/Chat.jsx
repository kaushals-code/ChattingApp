import React, { useState } from "react";
import { giveStatus } from "../../Auth";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatDate from "./ChatDate";


function Chat(props) {

    const dat = giveStatus();

    // We got the message area now just render each and every message to the message area
    const chat = dat.chats.find((sat) => sat.id === props.id);

    const [lastDate, setLastDate] = useState(null);

    return (
        <>
            {/* // Chat Header */}
            <div className="chat-window">
                <ChatHeader name={chat.name} color={chat.chatcolor} />

                {/* // Messages Area */}
                < div className="messages-area" id="messagesArea" >
                    {
                        chat.messages.map((message, index) => {

                            const prevMessage = chat.messages[index - 1];
                            const showDate = !prevMessage || prevMessage.date !== message.date;

                            return (
                                <React.Fragment key={message.id}>
                                    {showDate && <ChatDate date={message.date} />}
                                    <ChatMessage text={message.text} type={message.type} />
                                </React.Fragment>
                            );
                        })
                    }
                </div >

                {/* Input bar and Send btn */}
                < div className="input-bar" >
                    <ChatInput />
                </div >

            </div >
        </>
    );
}

export default Chat;