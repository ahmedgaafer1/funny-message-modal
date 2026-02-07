import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValentineModalComponent } from './components/valentine-modal/valentine-modal.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@Component({
  selector: 'app-valentine-feature',
  standalone: true,
  imports: [CommonModule, ValentineModalComponent, SuccessMessageComponent],
  template: `
    @if (state() === 'ask') {
      <app-valentine-modal (yes)="onYes()" />
    } @else {
      <app-success-message />
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValentineFeatureComponent {
  state = signal<'ask' | 'success'>('ask');

  onYes() {
    this.state.set('success');
  }
}
