import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'ticket', component: TicketComponent},
      {path: 'product', component: ProductComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
