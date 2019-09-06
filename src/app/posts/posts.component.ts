import { Component,OnInit } from '@angular/core';

import { PostsService } from '../posts.service';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  constructor(private service:PostsService) {  }
  postsarr;
  
  ngOnInit() {
    
  this.service.getAll().subscribe(
      response=> this.postsarr = response);
  }
  addpost(input:HTMLInputElement){
    let postdata={title:input.value};
    this.postsarr.splice(0,0,postdata);

    input.value="";
    this.service.create(postdata).subscribe(response=>{
      let postarr:any=[];
      postarr=response;
      postdata['id']=postarr.id;
     // this.postsarr.splice(0,0,postdata);
    },(error:AppError)=>{
      this.postsarr.splice(0,1);

      if(error instanceof BadInput){
        alert("Invalid Request");
      }else throw error;
    })    
  }

  updatepost(post){
    this.service.update(post).subscribe(response=>{
      console.log(response);
    },(error:AppError)=>{
      if(error instanceof BadInput){
        alert("Invalid Request");
      }else throw error;
    });
  }

  deletepost(post){
    let index=this.postsarr.indexOf(post);
    this.postsarr.splice(index,1);

    this.service.delete(post).subscribe(null,(error:AppError)=>{
      this.postsarr.splice(index,0,post);
      if(error instanceof NotFoundError){
        alert("This post has been already deleted");
      }else throw error;
    });
  }

}
