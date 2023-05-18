interface IAuthState {
  IdInstance: number | null;
  ApiTokenInstance: string | null;
  wid: string | null;
  loading: boolean;
  error: string | null;
  viewsPassworld: boolean;
}

export type { IAuthState };
