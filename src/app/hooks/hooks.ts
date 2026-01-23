import { Component,viewChild,AfterViewInit, ViewChild, ElementRef,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-hooks',
  imports: [],
  templateUrl: './hooks.html',
  styleUrl: './hooks.css',
})
export class Hooks {
   @ViewChild('myInput') myInput!: ElementRef;
   private viewChecked = false;
   ngAfterViewInit(){
    
    console.log('ngAfterViewInit called');
   }
   ngAfterViewChecked() {
    if (!this.viewChecked) {
      console.log('ngAfterViewChecked called');
      this.viewChecked = true;
 }
}
}
