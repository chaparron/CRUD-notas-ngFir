import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/services/con.service';

@Component({
  selector: 'app-lista-agrega',
  templateUrl: './lista-agrega.component.html',
  styleUrls: ['./lista-agrega.component.css']
})
export class ListaAgregaComponent implements OnInit {
  nota:any={name:''};

  constructor(private ser:ConService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.ser.addNota(this.nota);
  }
}
