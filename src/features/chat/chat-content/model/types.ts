import { IRequestParam } from "@/entities";

export interface IReceivedBody {
  idMessage: string;
  instanceData: { idInstance: number; wid: string; typeInstance: string };
  messageData: {
    typeMessage: "extendedTextMessage" | "textMessage";
    textMessageData: { textMessage: string };
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

export interface IReceivedResponse {
  body: IReceivedBody;
  receiptId: number;
  myWid: string;
}

export interface IChatContentState {
  notificationStatus: boolean;
  error: string | null;
  loading: boolean;
  cache: {
    [string: string]: IChatHistory[];
  };
  newMessage: IReceivedResponse | null;
}

export interface IChatHistory {
  chatId: string;
  idMessage: string;
  sendByApi: false;
  statusMessage: string;
  textMessage: string;
  timestamp: number;
  type: "outgoing" | "incoming" | "date";
  typeMessage: string;
}

export interface IGetHistoryBody extends IRequestParam {
  body: {
    chatId: string;
    count?: number;
  };
}

export interface INotificatioBody extends IRequestParam {
  wid: string;
}

export interface IDeleteNotificationParams extends IRequestParam {
  params: number;
}
