import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DatabaseService {

  constructor(private http:HttpClient) { }
  insert(data){
    this.http.post("http://localhost/angularapi/imgupload.php",data).subscribe((res)=>{
      console.log(res);
    });
  }
}
