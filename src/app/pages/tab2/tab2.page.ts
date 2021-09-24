import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  //tomar el elemento del segmento
  @ViewChild(IonSegment) segment: IonSegment;

  //creamos un arreglo llamadoi categorias
  categorias = ['business','entertainment','general','health','science','sports','technology'];


  constructor() {}

  ngOnInit(){
    this.segment.value = this.categorias[0];
  }

}
