export class User {
  id: number;
  username: string;
  password: string;
  token: string;

  public deserialize(input: any): this {
    return Object.assign(this, input);
  }

}
