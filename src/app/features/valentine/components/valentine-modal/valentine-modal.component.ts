import {
  Component,
  ElementRef,
  ViewChild,
  output,
  signal,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine-modal',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './valentine-modal.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class ValentineModalComponent implements AfterViewInit {
  yes = output<void>();

  @ViewChild('modalContainer', { static: true }) modalContainer!: ElementRef<HTMLElement>;
  @ViewChild('noBtn', { static: true }) noBtn!: ElementRef<HTMLButtonElement>;

  noBtnStyle = signal<Record<string, string>>({
    transform: 'translate(0px, 0px)',
    transition: 'transform 0.3s ease-out',
  });

  ngAfterViewInit(): void {
    this.resetButtonPosition();
  }

  onYesClick() {
    this.yes.emit();
  }

  onNoClick() {
    this.moveButton();
  }

  onNoHover() {
    this.moveButton();
  }

  private resetButtonPosition() {
     this.noBtnStyle.set({
      transform: 'translate(0px, 0px)',
      transition: 'transform 0.3s ease-out',
    });
  }

  private moveButton() {
    const containerEl = this.modalContainer?.nativeElement;
    const btnEl = this.noBtn?.nativeElement;
    if (!containerEl || !btnEl) return;

    const containerRect = containerEl.getBoundingClientRect();
    const btnRect = btnEl.getBoundingClientRect();

    const padding = 20;
    
    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10;

    this.noBtnStyle.set({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: 'scale(1.1)', 
      transition: 'all 0.3s ease-out',
      position: 'absolute'
    });
    
    setTimeout(() => {
       this.noBtnStyle.update(s => ({...s, transform: 'scale(1)'}));
    }, 300);
  }
}
