import { Component, inject} from '@angular/core';
import { RespuestaopeniaComponent } from '../respuestaopenia/respuestaopenia.component';
import { RequestOpenia } from '../model/request-openia';
import { ResponseOpenia } from '../model/response-openia';
import { OpeniaingService } from '../openiaing.service';
import { Console } from 'console';

@Component({
  selector: 'app-openia',
  standalone: true,
  imports: [RespuestaopeniaComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Escribe tu busqueda" #filter/>
        <button class="primary" type="button" (click)="filterResult(filter.value)" [disabled]="isDisabled">Buscar</button>
      </form>
    </section>
    <br/>
    <section class="content">
        <app-respuestaopenia [responseOpenia]="responseOpenia"></app-respuestaopenia>
      </section>
  `,
  styleUrl: './openia.component.css'
})

export class OpeniaComponent {
  isDisabled:boolean=false;
  openiaingservice:OpeniaingService = inject(OpeniaingService);
  responseOpenia:ResponseOpenia = {
    role:"Admin",
    content:"Bienvenido prototipo0"
  };
  
  requestOpenia: RequestOpenia = {
    content: 'Da la vienvenida a prototipo0'
  }

  constructor(){
    // this.openiaingservice.getResponseia(this.requestOpenia).then(responseOpenia=>{
    //   this.responseOpenia = responseOpenia;
    // });
  }  

  filterResult(text:string){
    this.isDisabled = true;    
    this.requestOpenia.content = text;
    this.responseOpenia.content = "cargando ....";
    this.openiaingservice.getResponseia(this.requestOpenia).then(responseOpenia=>{
      this.responseOpenia = responseOpenia;
      this.isDisabled=false;
    });
  }

}
