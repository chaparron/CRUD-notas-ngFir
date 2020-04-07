import { Component, OnInit } from '@angular/core';
import { ConService } from '../../services/con.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  notas:any;
  editarNota: any={name:''};

  constructor(private con:ConService) {
    this.con.retornarNotas().subscribe(nota=>{
      this.notas=nota;
      console.log(this.notas);
    })
  }

  ngOnInit(): void {
  }
  eliminar(nota){
    this.con.eliminar(nota);
  }
  editar(nota){
    this.editarNota=nota;
  }
  formEditar(){
    this.con.editar(this.editarNota);
  }
}
