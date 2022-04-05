import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { publishFacade } from '@angular/compiler';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  public getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books')
  }
  public createBook(book:Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books',book)
  }
  public editBook(book:Book, id:number): Observable<Book> {
    return this.http.put<Book>(`http://localhost:3000/books/${id}`,book)
  }
  public findBookById(id : number) : Observable<Book> {
    return this.http.get<Book>(`http://localhost:3000/books/${id}`)
  }
  public deleteBookById(id : number) : Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/${id}`)
  }
}
