import { Component, OnInit } from '@angular/core';
import { Pice } from '../../../models/Pice/pice';
import { PiceService } from '../../../services/Pice/pice.service';
import { PiceFrontDto } from '../../../models/PiceFrontDTO/pice-front-dto';

@Component({
  selector: 'app-lager',
  templateUrl: './lager.component.html',
  styleUrl: './lager.component.css'
})
export class LagerComponent implements OnInit{

  pica: PiceFrontDto[];

  constructor(private piceService: PiceService){}
  
  ngOnInit(): void {
    
    this.piceService.getAllPicaDTO().subscribe({
      next: (res: PiceFrontDto[]) => {
        this.pica=res;
      }
    })

  }
  
  downloadReport() {
    this.piceService.downloadLagerReport().subscribe(response => {
      // Konvertovanje odgovora u Blob sa ispravnim MIME tipom za PDF
      const file = new Blob([response], { type: 'application/pdf' });
  
      // Kreiranje URL-a i preuzimanje fajla
      const url = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'lager-izvestaj.pdf';
      link.click();
  
      // Čišćenje URL objekta
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Greška pri preuzimanju izveštaja', error);
    });
  }

}
