import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardButtonModule } from './layouts/card-button/card-button.module';
import { TitleModule } from './layouts/title/title.module';
import { ContrpolPanelModule } from './layouts/control-panel/control-panel.moduel';
import { ButtonModule } from './layouts/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardButtonModule,
    TitleModule,
    ContrpolPanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
