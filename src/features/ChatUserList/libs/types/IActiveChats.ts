interface IActiveChats {
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

export type { IActiveChats };
