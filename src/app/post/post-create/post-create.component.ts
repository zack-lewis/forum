import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from '../post.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  // binding = '';

  @Output() dataOut = new EventEmitter<IPost>(); // Define output for sending data to parent
  @Input() postCount = 0;

  submitData(form: NgForm) {
    // if (this.binding.length < 1) {
    if (form.value.postContent.length < 1) {
      return 0; // Bail out if no data in text area
    }
    const newPost: IPost = {
      id: this.postCount,
      content: form.value.postContent,
      // content: this.binding,
    }; // build post data object
    this.dataOut.emit(newPost); // Send data to parent to process
    // form.value.postContent = ''; // Clear text area for next post
    form.controls['postContent'].setValue('');
    // this.binding = '';
  }
}
