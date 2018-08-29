import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class BookService {

    constructor(private http: HttpClient) {

    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/JSON/books.json").pipe(
            map((data: Response) =>{
                return data
            }
                //console.log(data);
            ))


    }
}



