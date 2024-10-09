import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Lists } from './Utility';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateForm';

  states:string[] = Lists.states;

  student:any = {
    firstName: '',
    lastName: '',
    username: '',
    gender: '',
    city: '',
    state: '',
    email: '',
    password: ''
  }

  studentDataFromForm:any;
  submit():void{
    this.studentDataFromForm = this.student;
  }

  reset():void{
    this.studentDataFromForm = {
      firstName: '',
      lastName: '',
      username: '',
      gender: '',
      city: '',
      state: '',
      email: '',
      password: ''
    };

    this.student = {
      firstName: '',
      lastName: '',
      username: '',
      gender: '',
      city: '',
      state: '',
      email: '',
      password: ''
    };
  }
}
