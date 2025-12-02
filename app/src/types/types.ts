export interface ChatInterface {
  chats: [
    {
      sender: SenderEnum;
      message: string;
      id: number;
    },
  ];
}

export enum SenderEnum {
  USER = "User",
  EVA = "Eva",
}
