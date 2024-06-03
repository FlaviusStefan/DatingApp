import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations'; // Import animation functions

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3s ease-in-out', style({ opacity: 2 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router){}


  registerMode = false;
  users: any;

 
  ngOnInit(): void {
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

  goToLearnmore(){
    this.router.navigateByUrl('/learnmore');
  }
}
