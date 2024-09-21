import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, mail, key } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    addIcons({eye, mail, key});
  }

}
