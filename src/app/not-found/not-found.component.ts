import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div
      class="container d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <h1 class="display-3 text-dark mb-3">404 - Page Not Found</h1>
      <p class="lead text-secondary mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <button (click)="goBack()" class="btn btn-primary btn-lg">Go Back</button>
    </div>
  `,
})
export class NotFoundComponent {

  constructor(private router: Router) {

  }


  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
