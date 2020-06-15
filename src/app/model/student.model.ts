import { Grade } from '../interfaces/grade.interface';

export class Student {
  name: string;
  id: string;
  scores: Grade;
  constructor(name: string, id: string, scores: Grade) { }
}
