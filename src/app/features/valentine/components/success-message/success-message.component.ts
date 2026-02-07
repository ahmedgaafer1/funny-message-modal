import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-message',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './success-message.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `]
})
export class SuccessMessageComponent {
  showFallback = signal(false);

onImageError(event?: Event) {
  console.error('GIF failed to load:', 'assets/gifs/dance.gif', event);

  this.showFallback.set(true);
}
}
