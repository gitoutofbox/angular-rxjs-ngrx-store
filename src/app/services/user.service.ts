import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject$ = new Subject<any>();
  private userThemeSubject$ = new Subject<any>();

  constructor() { }

  setUserInfo(userInfo: any) {
    this.userSubject$.next(userInfo);
  }
  setUserTheme(themeInfo: any) {
    this.userThemeSubject$.next(themeInfo);
  }
  getUserInfo() : Observable<any> {
    return this.userSubject$.asObservable();
  }
  getUserThemeInfo() : Observable<any> {
    return this.userThemeSubject$.asObservable();
  }
}
