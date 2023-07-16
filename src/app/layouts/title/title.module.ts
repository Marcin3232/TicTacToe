import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TitleComponent } from "./title.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TitleComponent],
  exports: [TitleComponent],
})
export class TitleModule {}
