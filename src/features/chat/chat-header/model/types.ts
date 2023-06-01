export interface IChatHeaderState {
  userAvatar: string | null;
  error: string | null;
  loading: boolean;
}

export interface IUserInfoBody {
  instance: number;
  token: string;
  wid: string;
}

export interface IChatUserInfoResponse {
  avatar: string;
  category: string;
  chatId: string;
  description: string;
  email: string;
  isArchive: boolean;
  isDisappearing: boolean;
  isMute: boolean;
  lastSeen: string | null;
  messageExpiration: string | null;
  muteExpiration: string | null;
  name: string;
}
