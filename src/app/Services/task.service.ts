import { Injectable } from '@angular/core';
import { Task } from '../Model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private storageKey = 'my-app-tasks';
  private nextId = 1;

  constructor() {
    this.loadTasksStorage();
  }

  private saveToStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    }
  }

  private loadTasksStorage(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTasks = localStorage.getItem(this.storageKey);

      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      } else {
        this.tasks = [
          {
            id: 1,
            title: 'Learning Angular',
            description: 'Completion of the test project',
            status: 'pending',
          },
        ];
      }
    }
    this.updateNextId();
  }

  private updateNextId(): void {
    if (this.tasks.length > 0) {
      this.nextId = Math.max(...this.tasks.map((task) => task.id)) + 1;
    } else {
      this.nextId = 1;
    }
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(title: string, description: string): void {
    const newTask: Task = {
      id: this.nextId,
      title,
      description,
      status: 'pending',
    };
    this.tasks.push(newTask);
    this.saveToStorage();
    this.updateNextId();
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveToStorage();
    this.updateNextId();
  }
}
