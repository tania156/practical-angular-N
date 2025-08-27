import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // <<-- ДОДАЙТЕ ЦЕЙ ІМПОРТ

// Якщо Students і Welcome є окремими компонентами, їх слід імпортувати так.
// Якщо Students - це просто інтерфейс, цей імпорт може бути іншим.

import {Student} from './component/student/student';
import {RouterOutlet} from '@angular/router';
// import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule,     // <<-- ТУТ МАЄ БУТИ COMMONMODULE
    Student,
    RouterOutlet
  ],
  standalone: true,
})
export class AppComponent {
  // <<-- ДОДАЙТЕ СЮДИ МАСИВ STUDENTS
  students = [
    { name: 'Ivan Petrenko', grade: 85, email: 'ivan@gmail.com' },
    { name: 'Oksana Shevchenko', grade: 90, email: 'oksana@dev.com' },
    { name: 'Petro Vasylenko', grade: 45, email: 'petro@ukr.net' },
    { name: 'Maria Tkachenko', grade: 45, email: 'maria@gmail.com' },
  ];
}
