import { Component, Input } from '@angular/core';
import { ResponseOpenia } from '../model/response-openia';

@Component({
  selector: 'app-respuestaopenia',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <pre>{{responseOpenia.content}}</pre>
      </form>
    </section>
  `,
  styleUrl: './respuestaopenia.component.css'
})
export class RespuestaopeniaComponent {
  @Input() responseOpenia!:ResponseOpenia;
}
