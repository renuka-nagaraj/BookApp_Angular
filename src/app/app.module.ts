import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {BookService} from './book/book.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './book/book.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  exports:[
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
