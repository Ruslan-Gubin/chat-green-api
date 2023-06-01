export interface IActiveChats {
  archive: boolean;
  avatar: string;
  category: string;
  chatId: string;
  description: string;
  email: string;
  ephemeralExpiration: number;
  ephemeralSettingTimestamp: number;
  id: string;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  lastSeen: null | string;
  messageExpiration: number;
  muteExpiration: null | string;
  name: string;
  notSpam: boolean;
  active: boolean;
}

export interface IOneContactInfo {
  avatar: string
  category: string
  chatId: string
  description: string
  email: string
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  lastSeen: null | string;
  messageExpiration: number;
  muteExpiration: null | string;
  name: string
}

export interface IContactsState {
  error: string | null;
  loading: boolean;
  activeChats: IActiveChats[];
  searchContact: IActiveChats | null;
  activeContact: IActiveChats | null;
}

export interface IGetAllChatsBody {
  instance: number;
  token: string;
}

export interface IGetContactInfo extends IGetAllChatsBody {
  body: {chatId: string}
}