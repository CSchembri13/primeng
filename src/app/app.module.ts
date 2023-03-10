import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { PieChart } from 'primeng/chart';

import { AppComponent } from './app.component';
import { ProductService } from './productservice';

import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
