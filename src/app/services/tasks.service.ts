import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Task[]=[]

  constructor() { 
    let storedTasks=localStorage.getItem('tasks');
    if(storedTasks){
      this.tasks=JSON.parse(storedTasks);
    }else{
      this.tasks=[];
    }
   
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
   this.storeTasks();
  }
  saveTask(title:any,description:any,date:any,status:boolean){
   this.tasks.push({
    title,
    description,
    date,
    status
   })
   this.storeTasks();

  }
  updateTask(id:any,item:any){
    this.tasks[id]=item;
    this.storeTasks();
  }
  storeTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));

  }

}
