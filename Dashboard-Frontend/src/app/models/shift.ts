import {User} from './user';

export class Shift {
  id: number;
  employeeSlots: number;
  shiftDate: Date;
  workingEmployees: User[];

  public deserialize(input: any): this {
    return Object.assign(this, input);
  }

}


