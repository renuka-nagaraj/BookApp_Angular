import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';


@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private service:BookService) { }
      values;
  ngOnInit() {
   // debugger;
   this.service.getJSON().subscribe(data =>
        {
           this.values = data;
          //console.log("from com",this.values[0].name)
        });
  }

}
