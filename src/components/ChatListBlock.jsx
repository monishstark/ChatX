import '../styles/ChatListBlock.css';

const ChatListBlock = ({ chatDetail, onChatClick }) => {
    return (
        <div>
            <div className="listBlock" onClick={() => onChatClick(chatDetail.id)}>
                <div className="avatar">
                    <img src={chatDetail.img} alt="avatar" />
                </div>
                <div className="chatInfo">
                <div className="top">
                    <div className='topName'>
                        <h3>{chatDetail.name}</h3>
                    </div>
                    <div className='blockTime'>
                        <span>{chatDetail.time}</span>
                    </div>
                </div>
                <p>{chatDetail.lastMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatListBlock;
