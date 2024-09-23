import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, mail, key } from 'ionicons/icons';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    addIcons({eye, mail, key});
  }

  login() {
    this.router.navigateByUrl("/home");
  }

}
