import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { Message } from "../typings";

 const HomePage = async () => {
    const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).
    then((res) => res.json());

    const messages: Message[] = data.messages;



    return (
        <main>
            {/* message list */}
            <MessageList initialMessages={messages}/>
            {/* chat input */}
            <ChatInput />
            
        </main>
    );
}


export default HomePage;