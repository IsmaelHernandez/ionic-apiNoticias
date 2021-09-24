import { Component, OnInit } from '@angular/core';
//importamos interface
import { RespuestaNoticia, Article } from 'src/app/interfaces/interfaces';
//importamos el servicio que se va a consumir
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}


  ngOnInit(){
    this.noticiasService.getNoticia()
    .subscribe( resp  => {
      console.log('noticias', resp);
      //this.personajes = resp.results;
      this.noticias.push( ...resp.articles );
    });
  }

}
