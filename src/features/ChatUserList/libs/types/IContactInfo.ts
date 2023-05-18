interface IOneContactInfo {
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

export type { IOneContactInfo };
