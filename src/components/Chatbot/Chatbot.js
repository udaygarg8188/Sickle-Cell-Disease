import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '') return;
    
        const userMessage = { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() };
        setMessages([...messages, userMessage]);
    
        console.log('Sending message to server:', input);
    
        try {
            const response = await fetch('http://localhost:3002/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }
    
            const data = await response.json();
            const botMessage = { text: data.reply, sender: 'bot', timestamp: new Date().toLocaleTimeString() };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            setMessages(prevMessages => [...prevMessages, { text: 'Error connecting to server.', sender: 'bot' }]);
            console.error('Error during fetch:', error);
        }
    
        setInput('');
    };
    
    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="chatbot-container">
            <div className="chatbot-icon" onClick={toggleChatbot}>
                {isOpen ? '🗙' : '💬'}
            </div>
            {isOpen && (
                <div className="chatbot">
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                <p>{msg.text}</p>
                                <small>{msg.timestamp}</small>
                            </div>
                        ))}
                    </div>
                    <div>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSend}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
