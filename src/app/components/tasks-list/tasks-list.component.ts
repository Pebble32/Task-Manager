import { Component, Input, OnInit } from '@angular/core';
import { Task, PriorityEnum } from '../../constants/tasks.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html'
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedPriority: PriorityEnum | '' = '';

  PriorityEnum = PriorityEnum;

  constructor() { }

  ngOnInit(): void {
    this.filteredTasks = this.tasks;
  }

  removeTask(task: Task): void {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      this.filterTasks();
    }
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
    this.filterTasks();
  }

  filterTasks(): void {
    if (this.selectedPriority === '') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(task => task.priority === this.selectedPriority);
    }
  }

  onPriorityChange(): void {
    this.filterTasks();
  }
}
