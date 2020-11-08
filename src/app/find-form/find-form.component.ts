import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find-form',
  templateUrl: './find-form.component.html',
  styleUrls: ['./find-form.component.css']
})
export class FindFormComponent implements OnInit {
  searchName:string;
  @Output() searchOutput = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

}
