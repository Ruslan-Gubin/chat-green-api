import { IRequestParam } from "@/entities";

export interface IsendMessageState {
  error: string | null;
  loading: boolean;
  sendMessatesId: string[];
}

export interface ISendMessageBody {
  chatId: string;
  message: string;
}

export interface ISendMessage extends IRequestParam {
  body: ISendMessageBody;
}