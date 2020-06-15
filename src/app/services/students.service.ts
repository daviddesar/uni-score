import { Injectable, EventEmitter } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsList: Array<Student> = [
    {
      name: 'Nguyen Quan',
      id: '123456',
      scores: {a: 25, b: 25, c: 25}
    },
    {
      name: 'Vu Hoang',
      id: '456789',
      scores: {a: 24, b: 0, c: 0}
    },
    {
      name: 'Tran Vu',
      id: '234567',
      scores: {a: 0, b: 28, c: 10}
    },
    {
      name: 'Hoang Van',
      id: '345678',
      scores: {a: 27, b: 0, c: 22}
    },
    {
      name: 'Vi Le',
      id: '567891',
      scores: {a: 29, b: 0, c: 25}
    },
  ];
  studentSearchStatus: any;
  studentSearchEmitter = new EventEmitter();

  searchStudent(idStudent: string): any {
    // blank input handle:
    if (idStudent === '') {
      this.studentSearchStatus = null;
      this.studentSearchEmitter.emit(this.studentSearchStatus);
      return;
    }

    const idStudentIndex = this.studentsList.findIndex(student => student.id === idStudent);
    this.studentSearchStatus = idStudentIndex !== -1 ? this.studentsList[idStudentIndex] : -1;

    console.log('studentSearch: ', this.studentSearchStatus);
    this.studentSearchEmitter.emit(this.studentSearchStatus);
  }
}
