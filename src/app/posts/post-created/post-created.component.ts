import { Component } from '@angular/core';

@Component({
  selector: 'app-post-created',
  templateUrl: './post-created.component.html',
  styleUrls: ['./post-created.component.css']
})
export class PostCreatedComponent {
  enteredValue=''
  newPost='Empty!'
    onAddPost(){
      if(this.enteredValue==''){
        this.newPost='Empty!'
      }
      else{
        this.newPost=this.enteredValue
      }
    }
}
