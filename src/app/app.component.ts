import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPageModule } from './demo-page/demo-page.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoPageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learn_lazy-rendering-using-css';
}
