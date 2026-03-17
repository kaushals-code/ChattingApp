import React from "react";

function EmptyState() {
    return (
        <div className="empty-state" id="emptyState">
            <div className="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            </div>
            <div className="empty-title">ChatApp Web</div>
            <div className="empty-sub">Send and receive messages without keeping your phone online.<br />Use ChatApp on up to
                4 linked devices and 1 phone at the same time.</div>
            <div className="lock-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Your personal messages are end-to-end encrypted
            </div>
        </div>
    );
}

export default EmptyState;