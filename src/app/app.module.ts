import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './componente/barra/barra.component';
import { FooterComponent } from './componente/footer/footer.component';
// HTTP
import { HttpClientModule } from '@angular/common/http';
// Paginación
import { NgxPaginationModule } from 'ngx-pagination';
// Importación del componente Card
import { CardComponent } from './componente/card/card.component';
import { TablaComponent } from './componente/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FooterComponent,
    CardComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
