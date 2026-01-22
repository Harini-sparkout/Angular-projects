import { Component,viewChild,AfterViewInit, ViewChild, ElementRef,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-hooks',
  imports: [],
  templateUrl: './hooks.html',
  styleUrl: './hooks.css',
})
export class Hooks {
   @ViewChild('myInput') myInput!: ElementRef;
   ngAfterViewInit(){
    this.myInput.nativeElement; 
    console.log('ngAfterViewInit called');
   }
   ngAfterViewChecked(){
    console.log('ngafterviewchecked called');
   }
}

