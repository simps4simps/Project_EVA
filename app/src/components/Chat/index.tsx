import React, { useEffect, useState } from "react";
import BasicInput from "../../ui/inputs/BasicInput";
import { AnimatePresence } from "motion/react";
import { ChatInterface, SenderEnum } from "../../types/types";
import ChatBubble from "../../ui/chatBubble";

export default function Chat() {
  const [chats, setChats] = useState<ChatInterface | null>(null);
  const [input, setInput] = useState<string | null>(null);

  const loadChats = async () => {
    const chats = await window.eva.readChats();

    return chats;
  };

  const sendMessage = async () => {
    // TODO: Implement
  };

  useEffect(() => {
    loadChats().then((chats) => setChats(chats));
  }, []);

  return (
    <div className="p-5 flex w-[90%] h-[90%] bg-(--background-color) rounded-2xl flex-col">
      <div className="flex-1">
        <AnimatePresence>
          {chats ? (
            chats.chats.map((items) => (
              <div
                className={`flex ${items.sender == SenderEnum.USER ? "justify-end" : "justify-start"}`}
              >
                <ChatBubble sender={items.sender} text={items.message} key={items.id} />
              </div>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </AnimatePresence>
      </div>

      <div>
        <BasicInput
          onChangeCallback={(value) => setInput(value)}
          onEnterCallback={sendMessage}
        />
      </div>
    </div>
  );
}
