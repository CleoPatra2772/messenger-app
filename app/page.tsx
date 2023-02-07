import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { Message } from "../typings";
import { getServerSession } from "next-auth";
import { Providers } from './provider';

 const HomePage = async () => {
    const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).
    then((res) => res.json());

    const messages: Message[] = data.messages;
    const session = await getServerSession();


    return (
        <Providers session={session}>
        <main>
            {/* message list */}
            <MessageList initialMessages={messages}/>
            {/* chat input */}
            <ChatInput session={session}/>
            
        </main>
        </Providers>
    );
}


export default HomePage;