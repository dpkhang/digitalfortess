export type Login = {
  access_token: string;
  refresh_token: string;
};

export type TokenDecode = {
  iss: string;
  _id: string;
  nam: string;
  rol: string;
  iat: number;
  exp: number;
};
