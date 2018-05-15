import {Component} from '@angular/core';
import {Numero} from '../../numero';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-aleatorios',
  templateUrl: './aleatorios.component.html',
  styleUrls: ['./aleatorios.component.css']
})
export class AleatoriosComponent {

  public numeros = [];

  constructor() {
    for (let i = 1; i < 101 ; i++) {
      this.numeros.push(new Numero(i, Math.random()));
    }
  }

  public save() {
    const myJSON = JSON.stringify(this.numeros);
    const file = new Blob([myJSON], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(file, 'NúmerosAleatoriosValidos.txt');
  }
 }
