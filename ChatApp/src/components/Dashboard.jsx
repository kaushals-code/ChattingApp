import React from "react";
import { Navigate } from "react-router-dom";
import { giveStatus } from "../Auth";
import Sidebar from "./DashComp/Sidebar";
import EmptyState from "./EmptyState";

function Dashboard() {

    const user = giveStatus();

    if (!user || user.status !== "goodtogo") {
        return <Navigate to={"/login"} replace />
    }

    return (
        <>
            <div className="app">
                {/* Sidebar */}
                <Sidebar />

                {/* Empty State */}
                <EmptyState />
            </div>
        </>
    );

}

export default Dashboard;