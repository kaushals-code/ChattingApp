import React from "react";

function SidebarHeader() {
    return (
        <div className="sidebar-header">
            <div className="user-avatar" title="Your profile">KST</div>
            <div className="header-icons">
                {/* <!-- New Chat --> */}
                <button className="icon-btn" title="New chat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="10" y1="11" x2="14" y2="11" />
                    </svg>
                </button>
                {/* <!-- Menu --> */}
                <button className="icon-btn" title="Menu">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="5" r="1.5" />
                        <circle cx="12" cy="12" r="1.5" />
                        <circle cx="12" cy="19" r="1.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default SidebarHeader;