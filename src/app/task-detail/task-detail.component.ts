import { TaskService } from './../Services/task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Model/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss',
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  toggleStatus(task: Task) {
    if (task?.status === 'Completed') {
      task.status = 'pending';
    } else {
      task.status = 'Completed';
    }
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id);
    console.log(this.task)
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
