import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RESTcallsService} from './restcalls.service';
import {UserResource} from '../recources/userResource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  user: User;

  constructor(private http: HttpClient, private REST: RESTcallsService) {
  }

  getUsers(): User[] {
    const tempusers = [];
    this.REST.getUsers().subscribe(data => {
        for (let i = 0; i < (data as User[]).length; i++) {
          tempusers.push(data[i]);
          console.log('data', data[i]);
        }
      }
    );
    console.log('tempusres', tempusers);
    return tempusers;
  }

  getUserResources(): User[] {
    const tempusers = [];
    this.REST.getUserResources().subscribe(data => {
        for (let i = 0; i < (data as UserResource[]).length; i++) {
          tempusers.push(data[i]);
          console.log('data', data[i]);
        }
      }
    );
    console.log('tempusres', tempusers);
    return tempusers;
  }

  getUser(id: number): User {
    this.user = new User();

    this.REST.getUser(id).subscribe(data => {

      console.log('data', (data as User).id);
      }
    );
    console.log('tempusres', this.user);
    return this.user;
  }

  getUserResource(id: number): UserResource {
    const userResource = {} as UserResource;

    this.REST.getUserResource(id).subscribe(data => {

        console.log('data', (data as UserResource).id);

        userResource.id = (data as UserResource).id;
        userResource.name = (data as UserResource).name;
      }
    );
    console.log('tempusres', userResource);
    return userResource;
  }
}
