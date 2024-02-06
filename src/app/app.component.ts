import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpeniaComponent } from './openia/openia.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpeniaComponent],
  template: `
    <main>
    <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" />
      </header>
      <br/>
      <br/>
      <section class="content">
        <app-openia></app-openia>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dave';
}
