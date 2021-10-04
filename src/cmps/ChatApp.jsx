import { useEffect, useState } from "react";
import { TextField } from "@mui/material";

export function ChatApp({ openingText, answerText }) {
    const [isChatVisible, setIsChatVisible] = useState(false)
    const [chat, setChat] = useState([{ sender: 'site', txt: openingText }]);
    const [currentMessage, setCurrentMessage] = useState('');

    let timeout = null;

    useEffect(() => {
        //componentDidMount
        return () => {
            // componentWillUnmount
            clearTimeout(timeout)
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const newChat = [...chat, { sender: 'user', txt: currentMessage }];
        setChat(newChat);
        setCurrentMessage('');
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            setChat([...newChat, { sender: 'site', txt: answerText }]);
        }, 3000, chat);
    }
    const onChange = ({ target }) => {
        setCurrentMessage(target.value);
    }
    return (
        <div className="chat-app">
            {isChatVisible && <div class="chat-zone">
                <div className="chat-header flex align-center justify-center">
                    <i className="chat-close fas fa-times" onClick={() => setIsChatVisible(false)}></i>
                    <div className="chat-title">How can i help you?</div>
                </div>
                <div className="chat-body">
                    <ul>
                        {chat.map((message, idx) => <li key={idx} className={`flex align-center ${message.sender === 'site' ? 'chat-message-site' : 'chat-message-user justify-end'}`}>{message.txt}</li>)}
                    </ul>
                </div>
                <form className="flex" onSubmit={onSubmit}>
                    <button><i className="fas fa-paper-plane"></i></button>
                    <TextField
                        className="chat-input-message"
                        type="text"
                        label="Enter your message"
                        name="message"
                        variant="outlined"
                        value={currentMessage}
                        onChange={onChange} />
                </form>
            </div>}
            <div className="chat-open-chat" onClick={() => setIsChatVisible(true)}>
                <i className="fas fa-comments"></i>
            </div>
        </div>
    )
}