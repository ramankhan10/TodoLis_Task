import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h1 class="fs-1 bg-warning text-center p-4 mb-5 rounded">{{ title }}</h1>
    </section>
  `,
})
export class HeaderComponent {
  title = 'TodoList';
}
