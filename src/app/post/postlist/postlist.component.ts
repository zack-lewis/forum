import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
})
export class PostlistComponent {
  @Input() posts = [];
}
