import React from 'react';
import '../styles/ChatPage.css';
import MessageBubble from './MessageBubble'
import ChatHeader  from './ChatHeader';

const ChatWindow = ({ chat }) => {
    console.log("chat",chat)
    if (!chat) {
        return (
            <div className='chatWindow'>
                <img src="https://imgs.search.brave.com/Wpx8PGYZu1OPw1EDY7-06AgSGkh66o-_756smjGWvGI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4ud2FsbHBhcGVyc2Fm/YXJpLmNvbS8zNi81/NC8zem9iZlUuanBn" alt="No chat selected" />
            </div>
        );
    }
    const hInfo={"name":"name","img":"img"}
    return (
        <div className='chatWindow'>
            <ChatHeader headerInfo={hInfo} />
            <div className="chatBody">
            {chat.map((msg, index) => (
                <MessageBubble key={index} message={msg.message} isSender={msg.sender} />
            ))}
            </div>
 
            
        </div>
    );
};

export default ChatWindow;
