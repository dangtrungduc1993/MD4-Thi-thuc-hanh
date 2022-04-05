import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './book/create-book/create-book.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { DetailBookComponent } from './book/detail-book/detail-book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { UpdateBookComponent } from './book/update-book/update-book.component';


const routes: Routes = [
  {
    path : 'books',
    component : ListBookComponent
  },
  {
    path: 'books/create',
    component : CreateBookComponent
  },
  {
    path: 'books/update/:id',
    component : UpdateBookComponent
  },
  {
    path: 'books/delete/:id',
    component : DeleteBookComponent
  },
  {
    path : 'books/detail/:id',
    component : DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
