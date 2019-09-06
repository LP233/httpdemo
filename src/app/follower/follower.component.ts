import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'followers',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {

  constructor(private service:FollowersService) {  }
  postsarr;
    ngOnInit() {
    this.service.getAll().subscribe(
      response=> this.postsarr = response);
  }
 }
