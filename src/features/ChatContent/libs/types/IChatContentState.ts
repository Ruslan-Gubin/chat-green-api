import { IChatHistory } from "./IChatHistory"
import { IReceivedResponse } from "./IReceivedResponse"

interface IChatContentState {
  notificationStatus: boolean,
  error: string | null,
  loading: boolean,
  cache: {
    [string: string]: IChatHistory[]
  },
  newMessage: IReceivedResponse | null 
}

export type { IChatContentState }