import { Component, Input, SimpleChanges,AfterViewInit } from '@angular/core';
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
   private timer: any;

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
     ngOnInit() {
  console.log('EventComponent loaded');
  this.timer = setInterval(() => {
    console.log('tick'); 
  }, 1000);
}

      private previousData: string ='hello from angular';
   @Input() data!: string;
ngOnChanges(changes: SimpleChanges){
  if(changes['data']){
    const change= changes['data'];
    console.log('previous:',change.previousValue);
    console.log('current:',change.currentValue);+
    console.log('firstchange:',change.firstChange);
  }
}
 ngDoCheck() {
  if (this.data !== this.previousData) {
    console.log('ngDoCheck detected change');
    console.log('previous:', this.previousData);
    console.log('current:', this.data);
    this.previousData = this.data;
  }
}
 ngOnDestroy() {
  clearInterval(this.timer); 
    console.log('EventComponent is about to be destroyed');
   
  }

}
