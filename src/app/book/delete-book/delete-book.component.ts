import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  id:number;
  constructor(private bookService:BookService,
              private activateRoute : ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.activateRoute.snapshot.paramMap.get('id');
    // this.bookService.findbookById(this.id);
    this.deletebook();

  }
  deletebook(){
    // console.log(this.id);

    this.bookService.deleteBookById(this.id).subscribe(()=>{
      this.router.navigate(['books']);
      alert("Xoa Thanh cong")
    }, ()=>{
      alert("Xay ra loi")
    })
  }
}
