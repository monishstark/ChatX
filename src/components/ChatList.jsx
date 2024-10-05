import React from 'react';
import ChatListBlock from './ChatListBlock';
import '../styles/ChatList.css';
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const ChatList = ({ onChatClick }) => {
  const chats = [
    { id: 1, name: 'TELEFLIX NEW', lastMessage: 'Query: Thangalaan', time: '14:46' },
    { id: 2, name: 'Telegram', lastMessage: 'Login code: ...', time: '14:46' },
    { id: 3, name: 'Loot Deals & Offers ', lastMessage: 'Loot 314...', time: '14:42' },
  ];

  return (
    <div className='chatList'>
        <div className='chatListHeader'>
            <IoIosMenu className='menuIcon'/>
            <div className='searchCont'>
                <CiSearch className='searchIcon'/>
                <input className="searchInput" type="text" />
            </div>
        </div>
        {chats.map((chat) => (
            <ChatListBlock key={chat.id} chatDetail={chat} onChatClick={onChatClick} />
        ))}
    </div>
  );
};

export default ChatList;
