import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public tasksservice :TasksService,private title:Title){
    this.title.setTitle('Home');
  }
  deleteTask(i:number){
    this.tasksservice.deleteTask(i);
  }
  onChange(i: any): void {
    const isChecked: boolean = i.target['checked']; // or event.target.checked
   }

}
