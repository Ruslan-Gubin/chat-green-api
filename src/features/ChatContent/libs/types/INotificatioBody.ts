import { IRequestParam } from "@/app/types/IRequestParam";

interface INotificatioBody extends IRequestParam {
  wid: string;
}

export type { INotificatioBody }