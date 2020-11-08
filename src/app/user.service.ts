import { Injectable } from '@angular/core';
import { User } from './user';
import { Repo } from './repo';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  findUser: User;
  Repos: Repo;
  
  constructor(private http: HttpClient) { 
    this.findUser = new User("","","","",0,0,0,"",new Date);
    this.Repos = new Repo("","","",new Date,0,0,"");
  }

  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.findUser = result;
          console.log(this.findUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

getRepo(searchName){
  interface Repo{
    name:string;
    html_url:string;
    description:string;
    forks:number;
    watchers_count:number;
    language:string;
    created_at:Date;
  }
  return new Promise((resolve,reject)=>{
    this.http.get<Repo>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
      (results) => {
        this.Repos = results;
        resolve();
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });
}

}
