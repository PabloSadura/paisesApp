import { Component } from '@angular/core';
import { Country } from '../../intefaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  capital: Country[] = [];
  constructor(private paisServices: PaisService) {}

  buscarCapital(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisServices.buscarCapital(termino).subscribe(
      (capital) => {
        this.capital = capital;
      },
      (err) => {
        this.hayError = true;
        this.capital = [];
      }
    );
  }
}
