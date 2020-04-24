import {Injectable} from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RESTcallsService} from './restcalls.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  user: User;

  constructor(private http: HttpClient, private REST: RESTcallsService) {
  }

  // getUsers(): User[] {
  //   this.users = [];
  //
  //   this.http.get('https://jsonplaceholder.typicode.com/users',)
  //     .subscribe(data => {
  //
  //       for (let i = 0; i < (data as Array<any>).length; i++) {
  //         const user: User = {
  //           id: data[i].id,
  //           name: data[i].name
  //         };
  //         this.users.push(user);
  //       }
  //     });
  //
  //   console.log(this.users[0]);
  //
  //   return this.users;
  // }
  //
  // /* API CALL NOT WORKING FROM SERVER SIDE, REACTIVATE ONCE JSONPLACEHOLDER IS WORKING AGAIN */
  // // getUser(id: number): User {
  // //
  // //   this.http.get('https://jsonplaceholder.typicode.com/users/' + id)
  // //     .subscribe(data => {
  // //         const userGet = {
  // //           id: (data as User).id,
  // //           name: (data as User).name
  // //         };
  // //         return userGet;
  // //       }
  // //     );
  // //
  // //   return null;
  // // }
  //
  // getUsersTemp(): Observable<User> {
  //   this.users = [];
  //
  //   this.http.get('https://jsonplaceholder.typicode.com/users',)
  //     .subscribe(data => {
  //       for (let i = 0; i < (data as Array<any>).length; i++) {
  //         const user = {
  //           id: data[i].id,
  //           name: data[i].name
  //         };
  //         this.users.push(user);
  //       }
  //     });
  //
  //   console.log(this.users[0] as User);
  //
  //   return null;
  // }

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

  getUser(id: number): User {
    this.user = new User();

    this.REST.getUser(id).subscribe(data => {

      console.log('data', (data as User).id);

      this.user.id = (data as User).id;
      this.user.name = (data as User).name;
      }
    );
    console.log('tempusres', this.user);
    return this.user;
  }
}
