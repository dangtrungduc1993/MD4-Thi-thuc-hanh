import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private bookService: BookService,
    private activateRoute : ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = +this.activateRoute.snapshot.paramMap.get('id');
    ;
    console.log(this.findBookById(id));
  }
  editBook(){
    let data =this.bookForm.value;

    this.bookService.editBook(data , data.id).subscribe(()=>{
      this.router.navigate(['books']);
      alert("Cap nhat thanh cong");
      ()=>{
        alert("Cap nhat that bai")
      }
    })
  }

  findBookById(id){
    this.bookService.findBookById(id).subscribe(book=>{
      console.log(book)
      this.bookForm = new FormGroup({
        id: new FormControl(book.id),
        title : new FormControl(book.title),
        author : new FormControl(book.author),
        description : new FormControl(book.description),
      })
    })
  }

}
