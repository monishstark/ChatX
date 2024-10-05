import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatPage';
import '../styles/Chatroom.css';
import getChatList from '../service/GetChatList';

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = async (chatId) => {
    try {
      const chatData = await getChatList(chatId); 
      setSelectedChat(chatData); 
    
    } catch (error) {
      console.error('Failed to fetch chat:', error);
    }
  };

  return (
    <div className='chatRoom'>
        <ChatList onChatClick={handleChatClick} />
        <ChatWindow chat={selectedChat} /> 
    </div>
  );
};

export default ChatPage;
