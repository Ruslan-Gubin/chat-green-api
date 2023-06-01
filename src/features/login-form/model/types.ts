export interface IUserLoginValue {
  [key: string]: { text: number | string; error: boolean };
  instance: { text: number | string; error: boolean };
  token: { text: string; error: boolean };
}