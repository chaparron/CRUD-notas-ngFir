import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConService } from './services/con.service';
import { FormsModule }   from '@angular/forms';

import { ListaComponent } from './components/lista/lista.component';
import { ListaAgregaComponent } from './components/lista-agrega/lista-agrega.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { E404Component } from './components/e404/e404.component';
import { NotasComponent } from './components/notas/notas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notas', component: NotasComponent },
  { path: '404', component: E404Component },
  { path: '**', component: E404Component },
];

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAgregaComponent,
    NavbarComponent,
    HomeComponent,
    E404Component,
    NotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ConService],
  bootstrap: [AppComponent]
})
export class AppModule { }