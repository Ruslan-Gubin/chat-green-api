interface IChatHistory {
  chatId: string;
  idMessage: string;
  sendByApi: false;
  statusMessage: string;
  textMessage: string;
  timestamp: number;
  type: "outgoing" | "incoming" | 'date';
  typeMessage: string;
}

export type { IChatHistory };
