export interface ViewerModel {
  image: {
    public_id: string;
    url: string;
  };
  email: string;
  fullName: string;
  viewerId: string;
}

export interface ViewerInitState {
  IdInstance: number | null;
  ApiTokenInstance: string | null;
  wid: string | null;
  loading: boolean;
  error: string | null;
  viewsPassworld: boolean;
}

export interface IRequestParam {
  token: string;
  instance: number;
}

export interface ResponseAuthPromise extends IRequestParam {
  response: {wid: string}
  inputs: IRequestParam
}

