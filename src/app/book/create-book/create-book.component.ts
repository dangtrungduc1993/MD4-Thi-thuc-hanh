import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  bookForm:FormGroup = new FormGroup({
    title : new FormControl(),
    author : new FormControl(),
    description : new FormControl()
  })
  constructor(private bookService:BookService,
              private router: Router) { }

  ngOnInit() {
  }
  createBook(){
    this.bookService.createBook(this.bookForm.value).subscribe(()=>{
      this.router.navigate(['books']);
      alert("Tao Thanh cong")
    }, ()=>{
      alert("Xay ra loi")
    })
  }
}
