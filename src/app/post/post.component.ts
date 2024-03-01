import { Component, OnInit } from '@angular/core';

const postsFile = 'posts.txt';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  binding = '';
  secret = '';
  data = [];

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('postDataJson'));
  }

  submitData() {
    if (this.binding.length < 1) {
      return 0;
    }
    this.secret = this.binding;
    this.data.push(this.secret);
    this.binding = '';
    localStorage.setItem('postDataJson', JSON.stringify(this.data));
  }
}
