import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  user = 'User';
  bgColor = 'black';
  color = 'white';
  bodyBgColor = 'white';
  constructor( private userService: UserService) {
    this.userService.getUserInfo().subscribe(resp => {
      this.user = resp;
    });

    this.userService.getUserThemeInfo().subscribe(resp => {
     this.bgColor = resp['bgColor'];
     this.bodyBgColor = resp['bodyBgColor'];
     this.color = resp['color'];
    });
  }

}
