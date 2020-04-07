import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Nota { name: string, description:string }

@Injectable({
  providedIn: 'root'
})
export class ConService {
  private notasCollection: AngularFirestoreCollection<Nota>;
  notas: Observable<Nota[]>;
  private notaDoc: AngularFirestoreDocument<Nota>;

  constructor(private afs: AngularFirestore) {
    this.notasCollection = afs.collection<Nota>('notas');
    this.notas = this.notasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Nota;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  retornarNotas() {
    return this.notas;
  }
  addNota(nota:Nota){
    this.notasCollection.add(nota);
  }
  eliminar(nota){
    this.notaDoc=this.afs.doc<Nota>('notas/'+nota.id);
    this.notaDoc.delete();
  }
  editar(nota){
    this.notaDoc=this.afs.doc<Nota>('notas/'+nota.id);
    this.notaDoc.update(nota);
  }
}
