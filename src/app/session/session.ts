import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-session',
  imports: [FormsModule],
  templateUrl: './session.html',
  styleUrl: './session.css',
})
export class Session {
      userid : string='';
      pass: string='';
      sessionstorage(){
        if(this.userid===''||this.pass===''){
          alert('please enter userid and password');

        }
        sessionStorage.setItem('userid',this.userid);
        sessionStorage.setItem('pass',this.pass);
        alert('userid and password saves in session storage');
        this.userid='';
        this.pass='';
      }
}
