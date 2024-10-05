import ChatWindow from '../components/ChatPage'
const getChatList = async (id) => {
    const chat=[{"message":"qwertyuio","sender":true},{"message":"qwo","sender":false},{"message":"qwer","sender":true},{"message":"qwertyuio","sender":false},{"message":"qwertyuio","sender":true},{"message":"qwertyuio","sender":false},{"message":"qwertyuio","sender":true},{"message":"qwertyuio","sender":false},{"message":"qwertyuio","sender":true},{"message":"qwertyuio","sender":false},{"message":"qwertyuio","sender":true},{"message":"qwertyuio","sender":false},{"message":"qwertyuio","sender":true}];
    try {
        console.log("chatwindow",chat)
        return chat;
    } catch (error) {
        console.log(id)
        console.error('Error fetching chat list:', error);
    }
}

export default getChatList;
