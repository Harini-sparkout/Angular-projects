import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  result:Promise<string>=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve('hello harini');

    },3000);
  })
}
