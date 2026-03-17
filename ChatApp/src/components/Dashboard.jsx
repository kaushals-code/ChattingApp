import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { giveStatus } from "../Auth";
import Sidebar from "./DashComp/Sidebar";
import EmptyState from "./EmptyState";
import Chat from "./DashComp/Chat";

function Dashboard() {

    const user = giveStatus();

    if (!user || user.status !== "goodtogo") {
        return <Navigate to={"/login"} replace />
    }

    // const [showChat, setShowChat] = useState(false);
    const [chatId, setChatId] = useState(null);

    // function handleShowChat(b) {
    //     setShowChat(b);
    // }

    function handleChatId(id) {
        setChatId(id);
    }

    return (
        <>
            <div className="app">
                {/* Sidebar */}
                <Sidebar onClick={(id) => {
                    setChatId(id);
                }} />

                {/* <EmptyState /> */}

                {chatId !== null ? <Chat key={chatId} id={chatId} /> : <EmptyState />}

            </div>
        </>
    );

}

export default Dashboard;