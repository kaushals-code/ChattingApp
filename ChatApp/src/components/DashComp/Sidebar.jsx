import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarSearch from "./SidebarSearch";
import SidebarChat from "./SidebarChat";
import { giveStatus } from "../../Auth";

function Sidebar() {

    const stat = giveStatus();
    let chats;

    if (stat.status === "goodtogo") {
        chats = stat.chats;
    } else {
        chat = {};
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
                    return <SidebarChat name={chat.name} preview={chat.preview} time={chat.time} />
                })}
                {/* <SidebarChat name="Triansh Singh" preview="Kya haal hai bhai" time="2:32 PM" /> */}
            </div>

        </div>
    );
}

export default Sidebar;