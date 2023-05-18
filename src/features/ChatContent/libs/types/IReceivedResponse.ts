interface IReceivedBody {
  idMessage: string;
  instanceData: { idInstance: number; wid: string; typeInstance: string };
  messageData: {
    typeMessage: "extendedTextMessage" | 'textMessage';
    textMessageData: { textMessage: string }
    extendedTextMessageData: {
      text: string;
      description: string;
      title: string;
      previewType: string;
      jpegThumbnail: string;
    };
  };
  senderData: {
    chatId: string;
    chatName: string;
    sender: string;
    senderName: string;
  };
  timestamp: number;
  typeWebhook: string;
}

interface IReceivedResponse {
  body: IReceivedBody;
  receiptId: number;
  myWid: string;
}

export type { IReceivedResponse, IReceivedBody };
