import WebsocketManager from "../utils/websocketManager";
import { WindowManager } from "../utils/windowManager";

export function registerEvaBridge() {
  // Recieve Wake from listener daemon
  WebsocketManager.getInstance().subscribeEvent((data: { event: string }) => {
    const win = WindowManager.getMainWindow();
    if (!win) return;
    if (data.event !== "eva_wake") return;

    console.log("Wake event from listener");

    // Forward to renderer UI
    win.webContents.send("eva:wake");
  });
}
