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
  constructor(public userService: UserService, private repoService: UserService) { }

  searchs(searchName) {
    this.userService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.userService.findUser;
      },
      (error)=>{
        console.log(error)
      }
    );
    this.repoService.getRepo(searchName).then(
      (results)=>{
        this.repo =this.repoService.Repos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
}


  ngOnInit(): void {
    this.searchs('tharcissie');
  }

}
