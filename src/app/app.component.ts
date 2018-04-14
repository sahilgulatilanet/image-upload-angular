import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DatabaseService} from "./database.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fileData: File;
  imgform=new FormGroup({
    nm:new FormControl(),
    img:new FormControl()
  });
  constructor(private database:DatabaseService){

  }
  fileChange(event1: any) {
    console.log('file data');
    this.fileData = event1.target.files[0];
    console.log(event1.target.files);
  }
  onInsert(){
    let frm= new FormData();
    frm.append("avtar",this.fileData);
    frm.append( 'name',this.imgform.get('nm').value);
    //console.log(frm);
    this.database.insert(frm);
  }
}
