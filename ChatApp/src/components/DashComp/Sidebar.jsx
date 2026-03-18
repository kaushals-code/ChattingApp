import React, { useState } from "react";
import { giveStatus } from "../../Auth";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChat from "./SidebarChat";
import avatarColors from "../../AvatarColors";

function Sidebar(props) {

    const stat = giveStatus();
    let chats;
    const [curChat, setCurChat] = useState(null);

    if (stat.status === "goodtogo") {
        chats = stat.chats;
    }

    function handleOpenChat(id) {
        const chat = chats.find((chat) => chat.id === id);
        // Active Current Chat
        setCurChat(chat);

        props.onClick(id);

        // console.log(chat);
    }

    return (
        <div className="sidebar">

            {/* Sidebar Header */}
            <SidebarHeader />

            {/* Sidebar Search */}
            <SidebarSearch />

            {/* Chat List Sidebar */}
            <div className="chat-list" id="chatList">
                {chats.map((chat) => {
                    return <SidebarChat
                        key={chat.id}
                        name={chat.name}
                        preview={chat.preview}
                        time={chat.time}
                        onClick={() => handleOpenChat(chat.id)}
                        color={
                            chat.chatcolor !== "none"
                                ? chat.chatcolor
                                : (chat.chatcolor = avatarColors[Math.floor(Math.random() * avatarColors.length)])
                        }
                        active={chat.id === curChat?.id} />
                })}
                {/* <SidebarChat name="Triansh Singh" preview="Kya haal hai bhai" time="2:32 PM" /> */}
            </div>

        </div>
    );
}

export default Sidebar;