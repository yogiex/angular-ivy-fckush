import { Injectable } from '@angular/core';
import { User } from '../data/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login({ username, password }) {
    // ini cuma example untuk belajar, menggunakan mock data
    // tidak direkomendasikan ketika production
    // disarakan password untuk di hash
    const user = User.find((val) => val.username == username);
    if (user) {
      const isPasswordValid = user.password == password;
      if (isPasswordValid) {
        return user;
      }
    }
  }
}
