import { NgModule } from '@angular/core';
import "@angular/compiler";
import { of, pipe} from 'rxjs';
import { filter, map,tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, CurrencyComponent ],
  bootstrap:    [ AppComponent ]
})


@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}