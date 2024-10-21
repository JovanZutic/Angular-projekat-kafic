import { Component } from '@angular/core';
import { ZaposleniService } from '../../services/Zaposleni/zaposleni.service';
import { Zaposleni } from '../../models/Zaposleni/zaposleni';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  korisnicko: string = '';
  lozinka: string = '';

  constructor(private zaposleniService: ZaposleniService, private toastr: ToastrService, private router: Router){}

  onLogin(): void{
    if(this.korisnicko == '' || this.lozinka == ''){
      this.toastr.error("Niste popunili sva polja za prijavu. Molimo vas popunite ih.");
      return;
    }
    this.zaposleniService.getZaposleniLogin(this.korisnicko, this.lozinka).subscribe({
      next: (zaposleni:Zaposleni) => {
        console.log('Prijavljeni zaposleni: ', zaposleni.username);
        localStorage.setItem('username', zaposleni.username);
        this.toastr.success("Uspesna prijava!");
        if(zaposleni.uloga === 'sanker'){
          this.router.navigate(['/sanker-front']);
        }else if(zaposleni.uloga === 'menadzer'){
          this.router.navigate(['/menadzer-front']);
        }
      },
      error: (err ) => {
        this.toastr.error("Doslo je do greske.")
      }
    });
  }
}
