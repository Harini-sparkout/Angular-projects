import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  imports: [FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
     message: string="";
     formText:string="";
     onClick(){
      this.message='button clicked';
      alert('button clicked');
     }
     onMouseOver(){
      this.message='mouse is over';
     }
     onBlur(){
      this.message="input filed lost focus";
     }
     onSubmit(){
      if(this.formText===''){
            alert('please enter some text');
            return;
      }
      alert('text submitted:' +this.formText);
      this.formText='';
     }
}
