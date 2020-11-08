import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { UserService } from '../user.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo: Repo;
  constructor(public repoService: UserService) { }

  repoSearch(searchName){
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
    this.repoSearch('tharcissie');
  }

}
