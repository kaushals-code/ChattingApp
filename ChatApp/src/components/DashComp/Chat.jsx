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

    const [refresh, setRefresh] = useState(0);

    function getDate() {
        const d = new Date();

        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();

        return `${day}.${month}.${year}`;
    }

    function updateChat(message) {

        const time = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        const newId = chat.messages.length + 1;

        const whatToSend = {
            id: newId,
            type: 'out',
            text: message,
            time: time,
            date: getDate()
        }

        chat.messages.push(whatToSend);
        console.log(whatToSend);

        // For re-rendering the chat messages
        setRefresh(prev => prev + 1);
    }

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
                    <ChatInput updateMes={(mes) => updateChat(mes)} />
                </div >

            </div >
        </>
    );
}

export default Chat;