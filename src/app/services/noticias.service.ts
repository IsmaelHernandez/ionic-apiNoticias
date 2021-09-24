//importamos httpclients
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//importamos interface
import { RespuestaNoticia } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  //inyectamos el cliente http
  constructor( private http: HttpClient ) { }

  //Metodo para obtener personajes
  getNoticia() {
    return this.http.get<RespuestaNoticia>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33e97f7e267144cb8090ef9f68b781d2`)
  }
}
