import { Component } from '@angular/core';
import { Country } from '../../intefaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisServices: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisServices.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
        console.log(paises);
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
