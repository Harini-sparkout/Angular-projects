import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-destroy',
  imports: [],
  templateUrl: './destroy.html',
  styleUrl: './destroy.css',
})
export class Destroy {
   counter: number =0;
   private intervalId: any;
   constructor(){}

   ngOnInit() : void{
            console.log('timer start');
            this.intervalId= setInterval(()=>{
              this.counter++;
              console.log(this.counter);
               
            },1000);
   }
  
   ngOnDestroy(): void{
    console.log('destroy the component');
    
    clearInterval(this.intervalId);
    console.log('timer stopped');
   }
}
