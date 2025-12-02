import { ipcMain } from "electron";
import { ChatManager } from "../utils/chatManager";
import { ChatInterface } from "../types/types";

export function registerReadChats() {
  ipcMain.handle("read-chats", async () => {
    const chats: ChatInterface = ChatManager.getInstance().readChats();

    return chats;
  });
}

export function registerSaveChats() {
  ipcMain.handle("save-chats", async (event, sender: string, message: string) => {
    ChatManager.getInstance().saveMessage(sender, message);
  });
}
