import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowerComponent } from './follower/follower.component';
import { FollowersService } from './followers.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'',
      component:PostsComponent
    },{
      path:'posts',
      component:PostsComponent
    },{
      path:'followers',
      component:FollowerComponent
    }])
  ],
  providers: [PostsService,FollowersService,
  { provide:ErrorHandler, useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
