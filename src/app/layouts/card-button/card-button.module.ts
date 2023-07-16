import { NgModule } from "@angular/core";
import { CardButtonComponent } from "./card-button.component";
import { CommonModule } from "@angular/common";
import { TitleComponent } from '../title/title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CardButtonComponent],
  exports: [CardButtonComponent],
})
export class CardButtonModule {}
