export class UserResource {
  id: number;
  name: string;

  public deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
