import { Injectable } from '@angular/core';
import { Task } from '../Model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'Learning Angular',
      description: 'Completion of the test project',
      status: 'pending',
    },
  ];
  private nextId = 2;

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.nextId++,
      title,
      description,
      status: 'pending',
    };
    this.tasks.push(newTask);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
