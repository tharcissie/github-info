import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { Repo } from '../repo';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  repo: Repo;
  constructor(public myService: UserService, private repoService: UserService) { }

  ngOnInit(): void {
  }

}
