import { IActiveChats } from "./IActiveChats";

interface IContactsState {
  error: string | null;
  loading: boolean;
  activeChats: IActiveChats[];
  searchContact: IActiveChats | null;
  activeContact: IActiveChats | null;
}

export type { IContactsState };
