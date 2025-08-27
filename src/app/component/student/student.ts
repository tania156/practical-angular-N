import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student',
  imports: [CommonModule, ],
  standalone: true,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {
  students = [
    {name: 'Ivan Petrenko', grade: 85, email: 'ivan@gmail.com'},
    {name: 'Olga Shevchenko', grade: 55, email: 'olga@yahoo.com'},
    {name: 'Petro Bondarenko', grade: 72, email: 'petro@hotmail.com'},
    {name: 'Maria Ivanova', grade: 48, email: 'maria@gmail.com'},
    {name: 'Maria Ivanova', grade: 10, email: 'maria@gmail.com'},
    {name: 'Maria Ivanova', grade: 10, email: 'maria@gmail.com'},
    {name: 'Maria Ivanova', grade: 10, email: 'maria@gmail.com'},

  ];
  deleteStudent(student: any ) {
    console.log('Видаляємо студента:', student.name);
  }




}
