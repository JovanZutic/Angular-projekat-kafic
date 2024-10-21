import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menadzer-front',
  templateUrl: './menadzer-front.component.html',
  styleUrl: './menadzer-front.component.css'
})
export class MenadzerFrontComponent implements OnInit{
  
  constructor(private router: Router){

  }

  ngOnInit(): void {
   
  }
  
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
