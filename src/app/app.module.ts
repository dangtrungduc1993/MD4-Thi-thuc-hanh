import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    ListBookComponent,
    DetailBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
