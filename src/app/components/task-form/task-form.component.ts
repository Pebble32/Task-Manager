import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  tasks: string[] = [];
  newTask: string = '';
  constructor() { }
  ngOnInit(): void {
  }
  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}