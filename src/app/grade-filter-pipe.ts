import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradeFilter',
  standalone: true // Додаємо standalone, щоб його можна було імпортувати в компонент
})
export class GradeFilterPipe implements PipeTransform {
  transform(students: any[], minGrade: number): any[] {
    if (!students || minGrade === undefined) {
      return students;
    }
    return students.filter(students => students.grade >= minGrade);
  }
}
