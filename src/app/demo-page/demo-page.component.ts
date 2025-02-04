import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoPageModule } from './demo-page.module';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DemoPageModule
  ]
})
export class DemoPageComponent {
  blocks = Array(50).fill(0).map((_, i) => `Content Block ${i + 1}`);
  showOptimized = true;

  toggleOptimization() {
    this.showOptimized = !this.showOptimized;
  }
} 