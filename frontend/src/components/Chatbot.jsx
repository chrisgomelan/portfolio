import {useState, useRef, useEffect} from 'react';

export default function Chatbot() {

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error, setError] = useState(null);
    const messageEndRef = useRef(null);
    const [input, setInput] = useState("");

    const sctrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        sctrollToBottom();
    }, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {sender: 'user', text: input.trim()};
        const messageText = input.trim();
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setLoading(true);

       try{
         const response = await fetch('frontend/api/chat', {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({message: messageText}),
         });
        if(!response.ok){
                const errorData = await response.json();
                console.error('API Error:', errorData);
                throw new Error(errorData.error || 'Failed to get response from AI');
            }
            
            const data = await response.json();
            console.log('API Response:', data);
            
            if (!data.reply) {
                throw new Error('No reply received from API');
            }
         const botMessage = {sender: 'bot', text: data.reply};
            setMessages((prevMessages) => [...prevMessages, botMessage]);   
       } catch (error){
            console.error('Error sending message:', error);
            const errorMessage = {sender: 'bot', text: 'Sorry, something went wrong. Please try again later.'};
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
       } finally {
            setLoading(false);
       }
    }

    return (
        
    <div className="fixed bottom-5 right-5 group">

        <div className="chatbot-label fixed bottom-24 right-4 10 bg-white px-3 py-1 rounded-full shadow-lg text-gray-800 mb-4 hidden group-hover:flex items-center space-x-2 ease-in-out transition-all duration-300">
                <span className="text-sm font-medium">Chat with me!</span>
        </div>
    
       { !isOpen && (
        <div onClick={() => setIsOpen(true)} className="chatbot-container fixed bottom-5 right-5 w-20 h-20 bg-white border border-white rounded-full cursor-pointer shadow-lg flex flex-col overflow-hidden hover:w-[5.5rem] hover:h-[5.5rem] ease-in-out transition-all duration-300">
            
            <div className="chat-header rounded-t-lg">
                <img src="/christian.png" alt="" />
            </div>
         </div>
        )}
        { isOpen && (
            <div className="absolute bottom-2 right-0 z-50 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col overflow-hidden">
                <div className='chat-header flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300'>
                    <div className="header-image flex items-center gap-2">
                        <img src="/christian.png" alt="Chris" className="w-10 h-10 rounded-full"/>
                        <h2>Chris Ai Chatbot</h2>
                    </div>
                    <button className="text-2xl font-bold" onClick={() => setIsOpen(false)}>&times;</button>
                </div>

                <div className="chatbody flex-1 p-4 overflow-y-auto">
                    { messages.length === 0 && (
                        <div className="chat-bubble flex items-start">
                            <img src="/christian.png" alt="Chris" className="w-8 h-8 rounded-full inline-block mr-2"/>
                            <p className="bg-gray-200 p-3 rounded-lg mb-2">Hello! I'm Chris, your AI assistant. How can I help you today?</p>
                        </div>
                    )}

                    {
                        messages.map((msg, index) => (
                           <div key={index} className={`chat-bubble flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                {msg.sender === 'bot' && <img src="/christian.png" alt="Chris" className="w-8 h-8 rounded-full inline-block mr-2"/>}
                                <p className={`p-3 rounded-lg mb-2 ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{msg.text}</p>
                           </div>
                        ))
                    }

                    {
                        loading && (
                            <div className="flex justify-start">Thinking...</div>
                        )  
                    }
                    <div ref={messageEndRef} />
                </div>

                <form onSubmit={sendMessage} className="chat-input border-t border-gray-300 p-4 flex gap-2">
                        <input type="text" value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 border focus:outline-none focus:ring-gray-800 px-3 py-2 border-slate-800 rounded-sm" />
                    
                        <button type="submit" disabled={loading} className="flex items-center gap-1">
                             <svg className="w-5 h-5" fill="#99999" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16216288 C3.34915502,0.9050655 2.40734225,1.01512989 1.77946707,1.4863994 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5950566 3.34915502,10.7521539 3.50612381,10.7521539 L16.6915026,11.5376408 C16.6915026,11.5376408 17.1624089,11.5376408 17.1624089,12.0089104 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                            </svg>
                        </button>
                </form>
            </div>
        )}
    </div>
    )
}