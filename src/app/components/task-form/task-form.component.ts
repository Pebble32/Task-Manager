import { Component, OnInit } from '@angular/core';
import { Task, PriorityEnum } from '../../constants/tasks.interface';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  newTask: string = '';
  newTaskPriority: PriorityEnum = PriorityEnum.none;
  PriorityEnum = PriorityEnum;

  constructor() { }

  ngOnInit(): void { }

  addTask() {
    if (this.newTask.trim() !== '') {
      const newTask: Task = {
        name: this.newTask,
        completed: false,
        priority: this.newTaskPriority,
      }
      console.log(newTask);
      this.tasks.push(newTask);
      this.newTask = '';
      this.newTaskPriority = PriorityEnum.none;
    }
  }
}
