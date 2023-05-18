interface ICreatePlayerResponse {
  createdAt: string;
  email: string;
  fullName: string;
  image: { public_id: string; url: string };
  online: false;
  token: string;
  updatedAt: string;
  __v: 0;
  _id: string;
}

interface ICreatePlayerBody {
  fullName: string;
  email: string;
  password: string;
  imag: string;
}

export type { ICreatePlayerResponse, ICreatePlayerBody };
