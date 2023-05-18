import { IRequestParam } from "@/app/types/IRequestParam";

interface ISendMessageBody {
  chatId: string;
  message: string;
}

interface ISendMessage extends IRequestParam {
  body: ISendMessageBody;
}

export type { ISendMessageBody, ISendMessage };
