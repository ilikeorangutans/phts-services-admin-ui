export interface Credentials {
  username: string;
  password: string;
}

export class User {
  constructor(
    public readonly username: string
  ) {}
}
