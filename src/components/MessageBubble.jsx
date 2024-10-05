import '../styles/MessageBubble.css';

const MessageBubble = ({message, isSender} ) => {
    return (
      <div className={`message-bubble ${isSender ? 'sender' : 'receiver'}`}>
        {message}
      </div>
    );
  };
  
  export default MessageBubble;
  