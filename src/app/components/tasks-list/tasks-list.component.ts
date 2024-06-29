import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../constants/tasks.interface';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit{
  @Input() tasks: Task[] = [];
  constructor() { }
  ngOnInit(): void {
  }

  removeTask(task: Task): void{
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1)
    }
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }
}