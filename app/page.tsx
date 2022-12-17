import ChatInput from "./ChatInput";
import MessageList from "./MessageList";

 const HomePage = () => {
    return (
        <main>
            {/* message list */}
            <MessageList/>
            {/* chat input */}
            <ChatInput />
            
        </main>
    );
}


export default HomePage;