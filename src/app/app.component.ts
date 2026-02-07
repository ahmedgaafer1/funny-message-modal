import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValentineFeatureComponent } from './features/valentine/valentine.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ValentineFeatureComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
