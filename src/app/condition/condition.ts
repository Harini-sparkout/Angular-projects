import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-condition',
  imports: [CommonModule,FormsModule,],
  templateUrl: './condition.html',
  styleUrl: './condition.css',
})
export class Condition {
   age: number =21;
   students=['aarthi','archana','vaishu'];
   games=[{
    name:'football',players:10
   },
   {name:'volleyball',players:11},
   {name:'cricket',players:11}
  ]

  festivals=['diwali','pongal','ramzan']
  department:string='IT';

  
  
}
