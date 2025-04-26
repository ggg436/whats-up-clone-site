
import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import ChatListSidebar from "./ChatListSidebar";
import ChatArea from "./ChatArea";

export interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  unread: number;
  online: boolean;
  isMedia?: boolean;
  isGroup?: boolean;
  isTyping?: boolean;
}

const ChatLayout = () => {
  const [currentChat, setCurrentChat] = useState<string>("Alice Whitman");
  const [showCallHistory, setShowCallHistory] = useState<boolean>(false);

  return (
    <div className="flex h-screen bg-white text-gray-900 overflow-hidden">
      <LeftSidebar 
        showCallHistory={showCallHistory}
        setShowCallHistory={setShowCallHistory}
      />
      <ChatListSidebar
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        showCallHistory={showCallHistory}
      />
      <ChatArea currentChat={currentChat} />
    </div>
  );
};

export default ChatLayout;
