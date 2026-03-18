import React from "react";

function ChatInput() {
    return (
        <>
            <div class="msg-input-wrap">
                <textarea class="msg-input" id="msgInput" placeholder="Type a message" rows="1"
                    onkeydown="handleKey(event)" oninput="autoResize(this)"></textarea>
            </div>
            <button class="send-btn" id="sendBtn" onclick="sendMessage()" title="Send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            </button>
        </>
    );
}

export default ChatInput;