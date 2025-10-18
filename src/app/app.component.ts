import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, CommonModule],
  template: `
    <div class="container mx-auto mt-4 p-4">
      <h1 class="text-center mb-4"> Evoltis - Prueba Técnica</h1>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    h1 {
      font-family: 'Segoe UI', sans-serif;
      font-weight: 500;
      color: #3f51b5;
    }
  `]
})
export class AppComponent {}
