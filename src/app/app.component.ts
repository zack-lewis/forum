import { Component, OnInit } from '@angular/core';
import { IPost } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Basic Forum';
  storedData = [];
  postCount = 0;

  ngOnInit() {
    this.storedData = JSON.parse(localStorage.getItem('postDataJson')) || [];
    this.postCount = this.storedData.length;
  }

  addData(newData: IPost) {
    // console.log('New Data: ', newData);
    this.storedData.push(newData);
    this.postCount = this.storedData.length;
    localStorage.setItem('postDataJson', JSON.stringify(this.storedData));
  }
}
