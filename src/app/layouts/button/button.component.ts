import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  buttonName: string = '';

  @Output()
  clickEvent = new EventEmitter<boolean>();

  onClick() {
    this.clickEvent.emit(true);
  }
}
