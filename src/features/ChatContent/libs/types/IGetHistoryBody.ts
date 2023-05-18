import { IRequestParam } from "@/app/types/IRequestParam";


interface IGetHistoryBody extends IRequestParam {
  body: {
    chatId: string;
    count?: number;
  };
}

export type { IGetHistoryBody };
