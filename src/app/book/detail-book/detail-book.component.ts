import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book : Book;
  id = this.route.snapshot.paramMap.get('id');



  constructor(private bookService: BookService,
              private route : ActivatedRoute,
              ) { }

  ngOnInit() {
    // let id = +this.activateRoute.snapshot.paramMap.get('id');
    this.findbookById(this.id)
  }
  findbookById(id){
    this.bookService.findBookById(id).subscribe(book=>{
      this.book = book;

    });
  }

}
